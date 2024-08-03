import * as cdk from 'aws-cdk-lib';
import { NestCdkStackRDS } from '../lib/nest-cdk-stack';
import 'dotenv/config'

const app = new cdk.App();
new NestCdkStackRDS(app, 'NestAppStackRDS', {
    env: {
        account: process.env.AWS_ACCOUNT_ID,
        region: process.env.AWS_REGION,
    },
});
app.synth;
