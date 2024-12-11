# **Smart Home Monitoring System**

This project is a full-stack application for managing smart home devices. It allows users to view, add, update, and delete devices, as well as control their specific states (e.g., turning lights on/off, adjusting brightness, managing thermostat temperature, etc.).

The system consists of:

- A **Spring Boot backend** that provides RESTful APIs for device management.
- An **Angular frontend** for a responsive and interactive user interface.
- Fully containerized using **Docker** for seamless deployment.

---

## **Features**

- **Device Management**: Add, edit, delete, and view smart devices.
- **Device Control**: Adjust device states, such as turning lights on/off, controlling brightness, and setting thermostat temperatures.
- **Cross-Origin Support**: Backend is configured to work seamlessly with the Angular frontend.
- **Fully Dockerized**: Easy deployment using Docker and Docker Compose.

---

## **Technologies Used**

- **Backend**: Java Spring Boot
- **Frontend**: Angular with Angular Material
- **Database**: mySQL
- **Containerization**: Docker and Docker Compose

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd <repository-folder>
```

---

### **2. Prerequisites**

Make sure the following are installed on your system:

- **Java 23+**
- **Node.js** (22 or later)
- **Angular CLI**
- **Docker** and **Docker Compose**

---

### **3. How to Deploy**

#### **Option 1: Using Docker Compose**

1. Build and deploy the entire stack (backend, frontend, and database) with Docker Compose:

   ```bash
   docker-compose up --build
   ```

2. Access the application:
   - Frontend: [http://localhost:4200](http://localhost:4200)
   - Backend API: [http://localhost:8080](http://localhost:8080)

---

#### **Option 2: Manual Deployment**

##### **Backend**

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Build and run the Spring Boot application:

   ```bash
   ./mvnw clean install
   java -jar target/shms-0.0.1-SNAPSHOT.jar
   ```

3. Verify the backend is running at [http://localhost:8080](http://localhost:8080).

##### **Frontend**

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build and serve the Angular application:

   ```bash
   ng serve
   ```

4. Access the frontend at [http://localhost:4200](http://localhost:4200).

---

## **API Endpoints**

Here are some key endpoints:

- `GET /<model-name>/all`: Retrieve all devices of that type. ex. `GET /light/all`: Retrieve all lights.
- `GET /<model-name>?name={name}`: Get a device of that type by name. ex. `GET /light/?name={name}`: Retrieve all lights.
- `GET /device`: Retrieve all devices.
