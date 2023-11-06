FROM node:latest

WORKDIR /app

COPY ./frontend/package*.json ./

RUN npm install --save react react-dom react-scripts

EXPOSE 3000
EXPOSE 8080

CMD ["npm", "run", "serve"]