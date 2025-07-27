FROM node:22

WORKDIR /usr/src/app

RUN npm install -g turbo

COPY package.json .
COPY turbo.json .
COPY yarn.lock .
COPY ./packages ./packages

RUN yarn install --frozen-lockfile
RUN cd ./packages/ui && yarn add react@19.0.0 react-native@0.79.2 -D && cd ../..

RUN yarn build
RUN yarn test
