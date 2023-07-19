#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PuppeteerStack } from '../lib/puppeteer-stack';

const app = new cdk.App();
new PuppeteerStack(app, 'PuppeteerStack');
