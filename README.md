


# ShopSphere

![ShopSphere Logo](./frontend/src/assets/ShopSpherelogo.png)

**ShopSphere** is a full-stack learning project designed to gain hands-on experience with **Spring Boot backend development** and modern **React frontend integration**. It simulates a small e-commerce platform with product browsing, cart management, and dynamic image rendering directly from the backend.  

This project emphasizes understanding **real-world application flow, API communication, and clean architectural practices** rather than production-scale commercialization.

---

## 🌟 Features

- **Frontend:**
  - Built with React (Vite) using Context API for state management
  - Product browsing and filtering
  - Add-to-cart functionality
  - Dynamic image rendering streamed from backend
  - Smooth scrolling and interactive Hero section
  - About section describing the project and tech stack

- **Backend:**
  - Spring Boot RESTful services
  - Controller-Service-Repository layered architecture
  - In-memory H2 database for quick development and testing
  - Binary image streaming via HTTP

- **Additional Features:**
  - Responsive product grid
  - Error handling with fallback images
  - Modern UI with gradients, cards, and hover effects
  - Footer with project info, tech stack, and purpose

---

## 🛠 Tech Stack

| Layer      | Technology       |
|-----------|----------------|
| Frontend   | React (Vite), Context API |
| Backend    | Spring Boot, REST APIs |
| Database   | H2 (In-memory) |
| Styling    | CSS, Inline Styling |
| Media      | Binary image streaming |

---

## 📁 Folder Structure

```

ShopSphere/
├─ frontend/           # React frontend
│   ├─ src/
│   ├─ public/
│   └─ package.json
├─ backend/            # Spring Boot backend
│   ├─ src/
│   └─ pom.xml
├─ .gitignore
└─ README.md

````

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Yuvrajsinh-chauhan5/ShopSphere.git
cd ShopSphere
````

### 2️⃣ Run Backend (Spring Boot)

Open the `backend` folder in **IntelliJ IDEA** (or VS Code with Java extensions) and run:

```bash
./mvnw spring-boot:run
```

The backend server will start at `http://localhost:8080`.

### 3️⃣ Run Frontend (React)

Open the `frontend` folder in a terminal and run:

```bash
npm install
npm run dev
```

The frontend will start, usually at `http://localhost:5173`.

---

## ⚡ How to Use

1. Open the app in your browser.
2. Explore products using the Hero section.
3. Click on product cards to see details.
4. Add products to your cart.
5. Toggle the About section to learn about the project and technology stack.

---

## 📝 Purpose

This project is built strictly for **learning and experimentation**:

* Understand full-stack integration of Spring Boot and React.
* Learn RESTful API design and implementation.
* Handle images and media efficiently.
* Practice UI/UX design for a modern e-commerce layout.

---

## 📌 Future Improvements

* Add authentication and user accounts.
* Connect to a persistent database like MySQL or PostgreSQL.
* Implement advanced filtering and search functionality.
* Integrate payment gateways and order management.

---

## 📜 License

This project is for **educational purposes only**.

---

## 🎯 Author

**Yuvrajsinh Chauhan**
GitHub: [https://github.com/Yuvrajsinh-chauhan5](https://github.com/Yuvrajsinh-chauhan5)
LinkedIn: (https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/)

```

