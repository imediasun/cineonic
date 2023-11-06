FROM node:16.6-alpine3.14
WORKDIR /app
RUN apk update && apk upgrade && apk add curl py-pip make g++
COPY ./back-office/package*.json ./
RUN npm uninstall vue-cli -g
RUN npm install -g @vue/cli-service
RUN npm install -g @vue/cli

RUN npm install
COPY ./back-office .

EXPOSE  8080
#3000
CMD [ "npm", "run", "serve" ]