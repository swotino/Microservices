FROM mysql
LABEL "Project"="Microservices"
LABEL "Author"="Leonardo D'Errico"

ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_DATABASE="demo"

ADD ./database.sql /docker-entrypoint-initdb.d/db_backup.sql

EXPOSE 3306