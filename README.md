# 📦 Product Management System – Full Stack Application

Product Management System is a full-stack web application designed to manage products with complete **CRUD (Create, Read, Update, Delete)** functionality.

The project follows a **mono-repo architecture** with a **React frontend** and a **Spring Boot backend**, demonstrating real-world full-stack development practices.

---

## 🚀 Features

- ➕ Add new products
- ✏️ Edit existing products
- ❌ Delete products
- 📋 View product list
- 🔄 Real-time UI updates
- 🌐 RESTful API integration
- 🧩 Clean separation of frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- Maven

### Database
- MySQL

---

## 📁 Project Structure

```
product-management-system/
│
├── product-management-frontend/     # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── product-management-backend/      # Spring Boot Backend
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│   └── application.properties
│
├── .gitignore
└── README.md
```

---

## ▶️ How to Run the Project

### ✅ Prerequisites
- Node.js (v18+ recommended)
- Java JDK 17+
- Maven
- MySQL
- Git

---

## 🗄️ Database Setup

1. Start MySQL (via XAMPP or MySQL Server)
2. Create a database:
```
product_management
```

3. Update backend configuration:
```
product-management-backend/src/main/resources/application.properties
```

Example:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/product_management
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
```

---

## 🖥️ Run Backend (Spring Boot)

1. Open terminal inside:
```
product-management-backend/
```

2. Run:
```bash
./mvnw spring-boot:run
```
(or `mvn spring-boot:run` on Windows)

3. Backend runs on:
```
http://localhost:8080
```

---

## 🌐 Run Frontend (React)

1. Open a new terminal inside:
```
product-management-frontend/
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser:
```
http://localhost:5173
```

---

## 🔁 Application Flow

1. User interacts with React UI
2. Frontend sends HTTP requests to Spring Boot REST APIs
3. Backend processes requests and interacts with MySQL database
4. Updated data is returned and rendered in UI

---

## ❗ Important Notes

- Backend and frontend must be running simultaneously
- Database must be running before starting backend
- This project avoids unnecessary Docker/YAML complexity for simplicity

---

## 🔮 Future Enhancements

- Authentication & authorization
- Pagination & sorting
- Search & filtering
- Cloud deployment
- Role-based access control

---

## 👨‍💻 Author

**Rohit More**  
Backend Developer (Aspiring)  
Java | Spring Boot | React | MySQL | REST APIs
