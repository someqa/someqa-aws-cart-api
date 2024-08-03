import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';
import 'dotenv/config';


export class NestCdkStackRDS extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = ec2.Vpc.fromLookup(this, 'Vpc', {
            vpcId: 'vpc-004cdb2bb402a2332'
        });

        const lambdaSecurityGroup = new ec2.SecurityGroup(this, 'LambdaSG', {
            vpc,
            allowAllOutbound: true,
            securityGroupName: 'LambdaSecurityGroup'
        });

        const rdsSecurityGroup = ec2.SecurityGroup.fromSecurityGroupId(this, 'RDSSG', 'sg-0ba0a285d71e66054');

        rdsSecurityGroup.addIngressRule(
            lambdaSecurityGroup,
            ec2.Port.tcp(5432),
            'Allow Lambda to access RDS'
        );

        const lambdaRole = new iam.Role(this, 'LambdaExecutionRole', {
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaVPCAccessExecutionRole'),
                iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonRDSFullAccess'),
            ]
        });

        const lambdaFunction = new lambda.Function(this, 'LambdaFunction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: 'lambda.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../dist')),
            memorySize: 512,
            timeout: cdk.Duration.seconds(90),
            environment: {
                DB_HOST: process.env.DB_HOST,
                DB_PORT: process.env.DB_PORT,
                DB_NAME: process.env.DB_NAME,
                DB_USERNAME: process.env.DB_USERNAME,
                DB_PASSWORD: process.env.DB_PASSWORD,
                PGSSLMODE: 'require'
            },
            vpc,
            securityGroups: [lambdaSecurityGroup],
            role: lambdaRole,
            allowPublicSubnet: true
        });


        new LambdaRestApi(this, 'nestAPIGateway', {
            restApiName: 'nestAPIGateway',
            handler: lambdaFunction,
        })

    }
}
