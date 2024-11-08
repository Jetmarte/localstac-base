#!/bin/bash
export AWS_PROFILE=project1
export AWS_REGION=us-east-1
#serverless deploy --config serverless.yml --stage local
serverless deploy --stage local

