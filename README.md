# Welcome to Next JS Template

This template is ready to deploy on Azure pipelines

## How to build this image?

Run the folowing command
`docker build . -t template-next -f docker/Dev-Dockerfile`

This specify the environment that is associated with azure app container.

For testing purposes, run the following command to run the container locally and validate the environment settings
`docker run --name template-next --publish 3000:3000 template-next`
