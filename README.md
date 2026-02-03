🚀 Productivity Tracker Chrome Extension

A full-stack Chrome Extension that tracks time spent on websites and provides productivity analytics with weekly reports.

🧠 Features

✅ Tracks time spent on different websites ✅ Classifies sites as Productive or Unproductive ✅ Stores data in MongoDB database ✅ Backend built with Node.js + Express ✅ Dashboard with charts & analytics ✅ Weekly productivity reports ✅ Real-time productivity score

🛠 Tech Stack

Frontend (Extension & Dashboard)

JavaScript

Chrome Extension APIs

Chart.js

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

📂 Project Structure backend/ → Node server + API dashboard/ → Analytics dashboard UI extension/ → Chrome extension files

⚙️ How to Run 1️⃣ Start MongoDB mongod

2️⃣ Start Backend cd backend node server.js

Server runs on:

http://localhost:5050

3️⃣ Load Chrome Extension

Go to chrome://extensions

Enable Developer Mode

Click Load Unpacked

Select the extension folder

4️⃣ Open Dashboard

Open:

dashboard/index.html

📊 API Endpoints Route Method Purpose /track POST Save tracked website time /analytics GET Overall productivity stats /weekly-report GET Last 7 days report 🎯 Use Case

Helps users understand how they spend time online and improve productivity by visualizing habits.

👨‍💻 Author Meet Bhattad
