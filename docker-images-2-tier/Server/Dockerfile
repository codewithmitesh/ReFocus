FROM node:17-alpine

RUN mkdir  -p /usr/app/
WORKDIR /usr/app/

COPY ./ ./

RUN npm install

EXPOSE 8000	
CMD [ "npm", "run","start" ]

