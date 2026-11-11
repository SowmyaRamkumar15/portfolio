# Spring Boot + JavaMail + MySQL Backend Service

A lightweight, enterprise-grade backend service built for **Sowmya R's Personal Portfolio**.

## 🛠️ Tech Stack
- **Java 17**
- **Spring Boot 3.2.3**
- **Spring Data JPA** (Hibernate)
- **Spring Boot Starter Mail** (JavaMailSender)
- **MySQL Connector/J**

---

## 🚀 Setup & Execution

### 1. Prerequisites
- JDK 17 or higher installed (`java -version`)
- Apache Maven installed (`mvn -v`)
- MySQL Server running locally on port `3306`

### 2. Configure Credentials
Update `src/main/resources/application.properties`:
```properties
# MySQL
spring.datasource.username=root
spring.datasource.password=your_mysql_password

# JavaMail (Generate an App Password from your Google Account Security settings)
spring.mail.username=sowmyaramkumar15@gmail.com
spring.mail.password=your_google_app_password
```

### 3. Build & Run
```bash
cd backend
mvn clean spring-boot:run
```

The service will start on `http://localhost:8080`.

---

## 📡 REST API Endpoints

### 1. Health Check
- **Endpoint**: `GET /api/contact/health`
- **Response**:
```json
{
  "status": "UP",
  "service": "Sowmya's Portfolio Contact API"
}
```

### 2. Submit Contact Inquiry
- **Endpoint**: `POST /api/contact`
- **Headers**: `Content-Type: application/json`
- **Payload**:
```json
{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "subject": "Full Stack Developer Opportunity",
  "message": "Hi Sowmya, we'd like to discuss an opportunity on our team."
}
```
- **Response**:
```json
{
  "status": "success",
  "message": "Inquiry received and recorded successfully!",
  "messageId": 1
}
```

