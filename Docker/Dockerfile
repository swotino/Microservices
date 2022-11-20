FROM debian
RUN apt update && apt install git maven openjdk-11-jdk -y
RUN mkdir -p app
RUN cd app/
RUN git clone -b cicd-jenkins https://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@github.com/swotino/Microservices.git
RUN cd SpringRest
RUN mvn install -DskipTests
ENTRYPOINT find ./target -name *.jar -print0 | xargs -0 java -jar
EXPOSE 8080