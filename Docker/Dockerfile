FROM debian
RUN apt update && apt install git curl maven openjdk-11-jdk -y
RUN mkdir -p app
RUN cd app/
RUN curl -L -G 'http://192.168.10.102:8081/service/rest/v1/search/assets/download' \
    -d repository=jenkins-springrest \
    -d sort=version \
    -d maven.groupId=jenkins-nexus-group \
    -d maven.artifactId=springrest \
    -d maven.extension=jar \
    -o artifact.jar
ENTRYPOINT java -jar artifact.jar
EXPOSE 8080:8080