FROM node:20.18.3-alpine3.20

WORKDIR /usr/src/app

RUN npm install -g turbo

COPY package.json .
COPY turbo.json .
COPY yarn.lock .
COPY ./packages ./packages

RUN yarn install --frozen-lockfile
RUN cd ./packages/ui && yarn add react@18.2.0 react-native@0.74.5 -D && cd ../..

RUN yarn build
RUN yarn test
