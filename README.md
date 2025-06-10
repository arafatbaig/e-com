# 🛒 E-Commerce Web App

A full-stack basic e-commerce application built using **React (Redux-Saga)**, **Node.js (Express + Sequelize)**, and **PostgreSQL**.

---



### Demo Video

📽️ Watch the demo:  
[![Watch the demo](https://www.loom.com/share/216819d2a64b430db50dee73304c5def?sid=49073a05-a917-4ecd-9567-52c307f58caa)



---

## 🚀 Features

- ✅ Product listing by category
- ✅ Product detail page with full information
- ✅ Add to Cart / Remove / Update quantity
- ✅ Order placement with customer details
- ✅ Admin-side APIs for CRUD on Products & Categories

---

## 🛠️ Tech Stack

| Part       | Tech                                |
|------------|-------------------------------------|
| Frontend   | React, Redux-Saga, Axios, Tailwind CSS |
| Backend    | Node.js, Express, Sequelize ORM     |
| Database   | PostgreSQL (Neon or local)          |

---
Configure .env
env
Copy
Edit
PORT=5000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=your_db_password
DB_HOST=your_db_host

Run Migrations & Seeders
bash
Copy
Edit
npx sequelize db:migrate
npx sequelize db:seed:all

npm run dev
# or
node index.js

Configure .env
env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api


API Usage (Backend)
Products
Method	Endpoint	Description
POST	/api/products	Add new product
PUT	/api/products/:id	Edit product
DELETE	/api/products/:id	Delete product
GET	/api/products	Get all products
GET	/api/products/:id	Get product details

Categories
Method	Endpoint	Description
GET	/api/categories	List all categories
GET	/api/categories/:id	Get single category

Orders
Method	Endpoint	Description
POST	/api/orders	Place new order

