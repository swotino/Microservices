FROM debian
RUN apt update && apt git install maven openjdk-11-jdk -y
RUN mkdir -p app
RUN cd app/
RUN git clone -b cicd-jenkins https://github.com/swotino/Microservices.git
RUN cd SpringRest
RUN mvn install -DskipTests
ENTRYPOINT find ./target -name *.jar -print0 | xargs -0 java -jar
EXPOSE 8080