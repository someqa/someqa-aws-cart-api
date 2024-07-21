import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class NestCdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const lambdaFunction = new lambda.Function(this, 'NestLambda', {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: 'bundle.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../dist-webpack')),
            memorySize: 512,
            timeout: cdk.Duration.seconds(30),
        });
    }
}
