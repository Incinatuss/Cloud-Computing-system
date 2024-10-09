FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install
COPY . .
ENTRYPOINT ["node"]
CMD ["node", "index.mjs"]