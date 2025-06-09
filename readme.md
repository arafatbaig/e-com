# 🛒 E-Commerce Web Application

A basic full-stack e-commerce application with product browsing, cart functionality, and order placement. Built as part of a developer assessment task.

---

## 🚀 Tech Stack

### 🔧 Backend
- **Node.js**
- **Express**
- **Sequelize ORM**
- **PostgreSQL**
- **dotenv**
- **cors**

### 💻 Frontend
- **React.js (Vite)**
- **Redux + Redux-Saga** ✅
- **React Router**
- **Material UI**
- **React Toastify**

---

## 📦 Project Structure

e-com/
├── backend/
│ ├── models/
│ ├── migrations/
│ ├── seeders/
│ ├── routes/
│ ├── controllers/
│ ├── database.js
│ └── index.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ ├── context/
│ │ └── App.jsx


---

## ⚙️ Setup Instructions

### ✅ Prerequisites
- Node.js (v18+)
- PostgreSQL
- npm / yarn

---

## 🖥️ Backend Setup (Node.js + Sequelize + PostgreSQL)

```bash
cd backend
npm install


1️⃣ Configure .env
Create a .env file in the backend root:

env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=ecommerce_db
DB_PORT=5432


2️⃣ Setup Database
bash
Copy
Edit
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all


3️⃣ Run Backend Server
bash
Copy
Edit
npm run dev
The server should run on: http://localhost:5000

Frontend Setup (React + Redux-Saga + Vite)
bash
Copy
Edit
cd frontend
npm install


1️⃣ Create .env file
env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api


2️⃣ Run React App
bash
Copy
Edit
npm run dev
Runs on http://localhost:5173



📡 API Usage Guide
📁 Category APIs
Method	Endpoint	Description
GET	/api/categories	Get all categories

📁 Product APIs
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Add a new product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product

📁 Order API
Method	Endpoint	Description
POST	/api/orders	Place an order