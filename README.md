# 🏛️ Timekeeper's Archive  
![Visa Navigator](https://raw.githubusercontent.com/LIBx09/B10A11-Timekeepers-Archive-Client/refs/heads/main/Timeskeeper.png)  


### 🔗 **Live Demo:** [Timekeeper's Archive](https://timekeeper-s-archive.web.app/)  

---
**A web application for tracking and exploring historical artifacts.**  

Timekeeper's Archive is a web application designed for history enthusiasts and researchers to explore and preserve historical artifacts. Users can register, browse artifacts, add new entries, and manage their own collection of historical items. Each artifact includes detailed information such as its origin, historical significance, and visual representation.

This platform not only allows users to discover ancient relics like the Rosetta Stone or Antikythera Mechanism but also encourages them to contribute their own findings. Users can like artifacts, track their contributions, and interact with a visually rich, user-friendly interface.

The system ensures a secure and smooth experience with Firebase authentication, MongoDB database, and an Express.js backend, making artifact management effortless. Whether you are a historian, collector, or simply curious about history, Timekeeper's Archive is your gateway to the past! 🏛️✨



## 🚀 **Introduction**  

**Timekeeper's Archive** is a **full-stack** web application designed to help users:  
✅ **Browse historical artifacts** such as the Rosetta Stone and Antikythera Mechanism.  
✅ **View detailed information** about each artifact.  
✅ **Add and contribute their own artifacts** to the collection.  
✅ **Like and track their favorite artifacts**.  
✅ **Provide a seamless and interactive experience** for history enthusiasts.  

The backend is built with **Express.js and MongoDB**, while the frontend is developed using **React, Firebase, and TailwindCSS**.  

🔗 **Live Project:** [Timekeeper's Archive](https://timekeeper-s-archive.web.app/)  
🔗 **GitHub Repository:** [Client Repo](https://github.com/LIBx09/B10A11-Timekeepers-Archive-Client)  

---

## 🎯 **Features**  
✔ **Artifact Browsing** – Explore a collection of historical artifacts.  
✔ **Detailed Information** – View descriptions, images, and historical significance.  
✔ **User Contributions** – Add and manage personal artifacts.  
✔ **Liking & Tracking** – Keep track of favorite artifacts.  
✔ **Secure Authentication** – Firebase login & JWT-protected API routes.  
✔ **Interactive UI** – Modern animations & seamless experience.  

---

## 🛠 **Technologies Used**  
### **Frontend** (Client)  
- **React** – UI library  
- **React Router DOM** – Navigation  
- **Firebase** – Authentication & backend services  
- **Axios** – API communication  
- **Framer Motion & Animate.css** – Smooth animations  
- **TailwindCSS & DaisyUI** – Styling  
- **Flowbite & Swiper** – UI components & sliders  

### **Backend** (Server)  
- **Node.js & Express.js** – Server framework  
- **MongoDB** – Database for storing artifact data  
- **JWT (jsonwebtoken)** – Authentication & security  
- **Dotenv** – Environment variable management  
- **CORS & Cookie Parser** – Secure API handling  

---

## 📦 **Installation**  

### **1️⃣ Clone the Repository:**  
```sh
git clone https://github.com/LIBx09/B10A11-Timekeepers-Archive-Client.git  
cd timekeeper-s-archive-client  
```

### **2️⃣ Install Dependencies:**  
```sh
npm install
```

### **3️⃣ Set Up Environment Variables:**  
Create a `.env.local` file for the **frontend**:  
```ini
VITE_apiKey=your_api_key_here  
VITE_authDomain=your_auth_domain_here  
VITE_projectId=your_project_id_here  
VITE_storageBucket=your_storage_bucket_here  
VITE_messagingSenderId=your_messaging_sender_id_here  
VITE_appId=your_app_id_here  
VITE_URL=https://timekeeper-s-archive-server.vercel.app
```
🚨 **Important:** Never expose API keys publicly!  

---

## 🌐 **Backend Setup**  

### **1️⃣ Navigate to the Backend Folder**  
```sh
cd backend
```

### **2️⃣ Install Backend Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up Backend Environment Variables**  
Create a `.env` file in the backend folder:  
```ini
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
ACCESS_WEB_TOKEN=your_secret_access_token
CORS_CLIENT_URL=http://localhost:5173
```

### **4️⃣ Start the Backend Server**  
```sh
npm start
```
This will start the server at `http://localhost:5000/`.  

---

## 🔑 **Dependencies**  

### **Frontend Dependencies:**  
- **React, React Router DOM** – UI & navigation  
- **Firebase** – Authentication  
- **Axios** – API requests  
- **Framer Motion, Animate.css** – Animations  
- **TailwindCSS & DaisyUI** – Styling  
- **Swiper, Flowbite** – UI enhancements  

### **Backend Dependencies:**  
- **Express.js** – Server framework  
- **MongoDB** – NoSQL database  
- **JWT (jsonwebtoken)** – Secure authentication  
- **Dotenv** – Secure environment variables  
- **CORS & Cookie Parser** – Secure API communication  

---

## 🛠 **Development**  

### **Run the Frontend**  
```sh
npm run dev
```

### **Run the Backend**  
```sh
npm start
```

### **Build the Project for Production**  
```sh
npm run build
```

---

## 📜 **License**  
This project is licensed under the **ISC License**.  


