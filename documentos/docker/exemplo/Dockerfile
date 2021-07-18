FROM node:alpine
COPY ./index.js /src/index.js

WORKDIR /src
RUN chmod +x ./index.js
ENTRYPOINT [ "node", "index.js" ]