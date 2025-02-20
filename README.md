# 🌍 Currency Converter App  
*A simple API and frontend for real-time currency conversion using live exchange rates.*

## 📌 Features  
✅ Convert between different currencies using **real-time exchange rates**  
✅ **REST API** for currency conversion  
✅ **User-friendly UI** to input currencies and amount  
✅ Built with **Node.js (backend) & React (frontend)**  
✅ **Modular & clean codebase**  

---

## 🚀 Live Demo (Localhost)

### **1️⃣ Backend (API)**
📌 **Endpoint:**  
```
http://localhost:5000/api/convert?from=USD&to=BDT&amount=400
```
📌 **Example Response:**  
```json
{
    "from": "USD",
    "to": "BDT",
    "originalAmount": 400,
    "convertedAmount": 48615.116
}
```

✅ **How to Run the API**  
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev 
   ```
   The API will be available at **http://localhost:5000/api/convert**.

---

### **2️⃣ Frontend (UI)**
📌 **URL:**  
```
http://127.0.0.1:5173/converter
```
📌 **How to Use the UI:**  
1. Select **"From"** and **"To"** currencies from dropdowns.  
2. Enter the **amount** to convert.  
3. Click **Convert** to get the converted value.  

✅ **How to Run the Frontend**  
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open **http://127.0.0.1:5173/converter** in your browser.

---

## 🎥 Video Demos
📌 **API & UI Implementation Demo:**  
🔗 https://github.com/user-attachments/assets/84940fe1-433f-4ff9-ab5f-1fa53980618e 

📌 **Frontend UI Interaction Demo:**  
🔗 https://github.com/user-attachments/assets/ffbf505d-7a9e-4e8e-8f14-2ca3bf27757a 

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, Exchangerate.host API  
- **Frontend:** React, Vite, TailwindCSS

---


## 📩 Contact
Have questions? Feel free to reach out!  

💬 **Imran Shaikh**  
📧 imransheikhsadi@gmail.com  
🔗 https://linkedin.com/in/Imran-S-haikh
