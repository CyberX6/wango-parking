FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["sh", "-c", "yarn migrate && npx sequelize-cli db:seed:all && node dist/index.js"]
