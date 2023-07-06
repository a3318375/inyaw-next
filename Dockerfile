FROM node:latest

WORKDIR /app

RUN npm install next@latest react@latest react-dom@latest

ADD .next ./
ADD package.json ./
ADD package-lock.json ./

RUN pwd
RUN ls

EXPOSE 3000

CMD ["npm", "start"]
