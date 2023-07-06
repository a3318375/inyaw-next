FROM node:lts-alpine

ADD .next ./
ADD package.json ./
ADD package-lock.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
