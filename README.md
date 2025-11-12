# smart-job-portal
Full Stack Job Portal using Spring Boot, MySQL, HTML, CSS, and JavaScript

# 🧠 Smart Job Portal

A full-stack **Spring Boot + MySQL** project that allows companies to post job openings and users to view or apply for them.  
This project demonstrates a simple, clean **RESTful API** integrated with a **MySQL database** — ideal for beginners in backend development.

---

## 🚀 Features

✅ Add new job postings (via REST API)  
✅ Fetch all available jobs  
✅ Connects Spring Boot application with MySQL Database  
✅ Uses JPA (Hibernate) for ORM  
✅ RESTful architecture  
✅ Integrated with Postman for testing  

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Java 17** | Programming Language |
| **Spring Boot 3.5.7** | Backend Framework |
| **Maven** | Build Tool |
| **MySQL 9.5** | Database |
| **Postman** | API Testing |
| **HTML, CSS, JavaScript** | Frontend Interface |

---

## ⚙️ Installation & Setup

### 🪜 Prerequisites
Make sure you have the following installed:
- [Java 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Maven](https://maven.apache.org/download.cgi)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Postman](https://www.postman.com/downloads/)

---

### 🧱 Steps to Run

1. **Clone the Repository**
   ```bash
   git clone https://github.com/BSiddartha/smart-job-portal.git
   cd smart-job-portal

**2.Configure Database**

In src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

**3.Run the Application**

mvn spring-boot:run

You’ll see something like:

Tomcat started on port 8080
Started SmartJobPortalApplication in 3.5 seconds

## 🔗 API Endpoints
| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| `POST` | `/api/jobs/add` | Add a new job |
| `GET`  | `/api/jobs/all` | Get all jobs  |

Example: Add Job
POST http://localhost:8080/api/jobs/add

{
  "title": "Java Developer",
  "company": "TCS",
  "location": "Hyderabad",
  "salary": 600000
}

Example: Get All Jobs
GET http://localhost:8080/api/jobs/all

[
  {
    "id": 1,
    "title": "Java Developer",
    "company": "TCS",
    "location": "Hyderabad",
    "salary": 600000
  }
]


## 🎨 Frontend UI (Optional)

- Simple HTML, CSS, JavaScript frontend integrated with the same backend.
- Displays available jobs and allows adding new ones.

## 👨‍💻 Author

BSiddartha

📍 India

💼 Java Full Stack Developer | Spring Boot | MySQL

🔗 GitHub Profile

## 🏁 Future Enhancements

- Add authentication (Spring Security / JWT)
- Implement job application feature
- Add role-based access (Admin, HR, User)
- Frontend integration with React or Angular

## ⭐ If you like this project, give it a star on GitHub!

---

### ✅ Now, push this to GitHub:
```bash
git add README.md
git commit -m "Added README documentation"
git push origin main
