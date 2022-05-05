FROM node:15-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

# ENV NODE_PATH=/app/node_modules

COPY . .
RUN chown -R node /app/node_modules
EXPOSE 3000

CMD ["npm","start"]

