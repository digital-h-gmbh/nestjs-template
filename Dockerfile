FROM node:18

WORKDIR /usr/src/app

COPY . ./

# Install production dependencies.
RUN npm install lib-1.0.0.tgz

RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
