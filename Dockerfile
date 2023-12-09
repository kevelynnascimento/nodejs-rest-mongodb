FROM node:16-alpine

WORKDIR /app

COPY . .

EXPOSE 5003

CMD [ "npm", "run", "migration:up" ]