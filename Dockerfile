FROM node:12-alpine

WORKDIR usr/src

COPY package*.json ./

RUN npm install

EXPOSE 8001

CMD 'npm dev'
