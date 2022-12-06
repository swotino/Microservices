# nodejs
FROM node
LABEL "Project"="Microservices"
LABEL "Author"="Leonardo D'Errico"

ENV "DB_HOST"="db"
ENV "DB_PORT"="3306"
ENV "DB_USER"="root"
ENV "DB_PASS"="root"

WORKDIR /home/node/
COPY server-app server-app/
RUN cd server-app && npm install -g npm@latest && npm install

ENTRYPOINT npm start --prefix /home/node/server-app/ > /home/node/server.log 2>&1

EXPOSE 9090