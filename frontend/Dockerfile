FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG ENV

RUN echo "MY_ENV_VAR = $ENV" && \
    echo -e "NEXT_PUBLIC_API_URL=${ENV}" > .env

RUN npm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "run", "dev"]
