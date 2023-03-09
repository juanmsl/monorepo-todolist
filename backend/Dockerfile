# stage1 - build node app first
FROM node:16.13.1-alpine3.15 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./yarn.lock /app/
RUN yarn --silent
ADD . /app
RUN yarn build
EXPOSE 3000
CMD ["node", "build/index.js"]

