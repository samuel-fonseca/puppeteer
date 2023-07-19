const path = require('path');
import { Stack, App, StackProps, Duration } from '@aws-cdk/core';
import { DockerImageFunction, DockerImageCode } from '@aws-cdk/aws-lambda';
import { Bucket } from '@aws-cdk/aws-s3';

export class PuppeteerStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'PuppeteerScreenshotBucket');
    const dockerFunction = new DockerImageFunction(this, 'LambdaNodeStack', {
      code: DockerImageCode.fromImageAsset(path.join(__dirname, '../image')),
      functionName: "demo-puppeteerLambdaNode",
      memorySize: 1024,
      timeout: Duration.seconds(300),
      environment: {
        BUCKET_NAME: bucket.bucketName
      }
    });

    bucket.grantPut(dockerFunction)
  }
}
