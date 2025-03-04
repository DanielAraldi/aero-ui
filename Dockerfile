FROM node:20.18.3-alpine3.20

WORKDIR /usr/src/app

RUN npm install -g turbo

COPY package.json .
COPY turbo.json .
COPY yarn.lock .
COPY ./packages ./packages

RUN yarn
RUN yarn build
RUN yarn test