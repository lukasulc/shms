#
# Build stage
#
FROM eclipse-temurin:23.0.1_11-jdk AS build
ENV HOME=/usr/app
RUN mkdir -p $HOME
WORKDIR $HOME
COPY . $HOME
RUN --mount=type=cache,target=/root/.m2 ./mvnw -f $HOME/pom.xml clean package

#
# Package stage
#
FROM eclipse-temurin:23.0.1_11-jdk
ARG JAR_FILE=/usr/app/target/*.jar
COPY --from=build $JAR_FILE /usr/app/shms.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/app/shms.jar"]