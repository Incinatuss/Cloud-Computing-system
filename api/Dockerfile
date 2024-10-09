FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
COPY . .
ENTRYPOINT ["node"]
CMD ["node", "index.mjs"]