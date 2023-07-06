FROM node:lts-alpine

ADD .next ./
ADD package.json ./

EXPOSE 3000

CMD ["npm", "start"]
