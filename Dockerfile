FROM node:latest

RUN npm install next@latest react@latest react-dom@latest

ADD .next ./
ADD package.json ./
ADD package-lock.json ./

EXPOSE 3000

CMD ["npm", "start"]
