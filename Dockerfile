FROM node:18-alpine3.20

WORKDIR /usr/src/app

RUN npm install -g turbo

COPY package.json .
COPY turbo.json .
COPY yarn.lock .
COPY ./packages ./packages

RUN yarn
RUN yarn build