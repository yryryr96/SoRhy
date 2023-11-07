
FROM node:16-alpine as builder

WORKDIR /src/app

COPY . .



RUN npm i

ARG ENV

RUN echo "MY_ENV_VAR = $ENV" && \
    echo -e "NEXT_PUBLIC_API_URL=${ENV}" > .env 

RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "dev"]
