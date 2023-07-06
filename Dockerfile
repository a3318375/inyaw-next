FROM node:latest

WORKDIR /app

RUN npm install next@latest react@latest react-dom@latest

COPY .next .
COPY package.json .
COPY package-lock.json .

RUN pwd
RUN ls

EXPOSE 3000

CMD ["npm", "start"]
