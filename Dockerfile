FROM node:lts-alpine

WORKDIR /app

RUN npm install next@latest react@latest react-dom@latest

ADD . .

RUN ls

EXPOSE 3000

CMD ["npm", "start"]
