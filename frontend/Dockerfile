FROM node:16-alpine as builder

WORKDIR /src/app

COPY . .
COPY .env .env
RUN npm i
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "dev"]