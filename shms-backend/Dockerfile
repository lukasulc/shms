FROM eclipse-temurin:23.0.1_11-jdk AS builder
RUN addgroup shmsgroup; adduser  --ingroup shmsgroup --disabled-password shms
USER shms
WORKDIR /usr/app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY ./src ./src
RUN ./mvnw clean install
 
FROM eclipse-temurin:23.0.1_11-jre
COPY --from=builder /usr/app/target/*.jar /usr/app/*.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/usr/app/*.jar" ]
