FROM node:16.6-alpine3.14
WORKDIR /code
RUN apk update && apk upgrade && apk add curl py-pip make g++
COPY back-office/package*.json ./
RUN npm uninstall vue-cli -g
RUN npm install -g @vue/cli-service
RUN npm install --save-dev @vue/cli-plugin-babel && @babel/core && @babel/preset-env
RUN npm install -g @vue/cli

RUN npm install
EXPOSE 3000
COPY . .
CMD [ "npm", "run","serve" ]