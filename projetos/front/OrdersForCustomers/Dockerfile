# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:12-slim as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@6.13.4 -g
RUN npm install -g @angular/cli
RUN npm install
COPY ./ /app/

WORKDIR /app
RUN ng build --configuration=hml

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=node /app/dist/OrdersForCustomers /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf