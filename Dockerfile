FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
RUN npx prisma generate

CMD [ "npm", "start" ]