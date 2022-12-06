# Nginx
FROM nginx:1.23.2
LABEL "Project"="Microservices"
LABEL "Author"="Leonardo D'Errico"

ENV APP_HOST="192.168.10.110"

#RUN rm -rf /etc/nginx/conf.d/default.conf
#COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/
COPY html html/
RUN echo 'const HOST = ${APP_HOST};\n \
const PORT = 9090;\n' \
> /usr/share/nginx/html/config.js

EXPOSE 80