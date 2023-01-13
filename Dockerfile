FROM node:18.7.0-alpine3.15
WORKDIR /app

COPY package.json .
RUN yarn install
COPY . .

EXPOSE 5000
CMD ["ts-node", "src/index.ts"]
