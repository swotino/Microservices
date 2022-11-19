FROM debian
RUN apt update && apt install maven openjdk-11-jdk -y
RUN git clone -b cicd-jenkins https://github.com/swotino/Microservices.git
RUN cd SpringRest
RUN mvn install -DskipTests
RUN find ./target -name *.jar -print0 | xargs -0 java -jar
EXPOSE 8080