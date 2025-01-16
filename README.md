XhivaTechWorld_MediSched Website

The XhivaTechWorld_MediSched website is a full-stack web application designed to facilitate doctor appointment bookings. The project is organized into three main folders: admin, backend, and frontend.

Folder Structure

1. Admin

This folder contains the admin dashboard for managing doctors, appointments, and user details.

Technologies Used: React.js, Vite, Axios

Key Features:

Manage doctor profiles

View and approve/reject appointment requests

Monitor user activity and system analytics

2. Backend

The backend handles API requests, database operations, and authentication.

Technologies Used: Node.js, Express.js, MongoDB

Key Features:

RESTful APIs for CRUD operations

User and admin authentication using JWT

3. Frontend

The frontend provides the user interface for patients to book appointments and interact with the system.

Technologies Used: React.js, Vite, Tailwind, Axios

Key Features:

User registration and login

Search and book appointments with doctors

View and manage personal appointment history


Installation Instructions:
1.Clone the repository:
git clone <repository_url>
cd XhivaTechWorld_MediSched

2.Install dependencies:
Navigate to each folder (admin, backend, frontend) and run:
npm install

3.Set up environment variables:
PORT=4000
MONGO_URI=<your_mongo_db_connection_string>
JWT_SECRET=<your_jwt_secret>

4.Run the project:

Start the backend:
cd backend
npm run server

Start the admin panel:
cd admin
npm run dev

Start the frontend:
cd frontend
npm run dev


Features

Admin Panel

Manage doctors, users, and appointments

View system analytics

Approve or reject appointment requests

Backend

Secure API endpoints for data management

User authentication with JWT

Database interactions with MongoDB

User Frontend

Search and book doctor appointments

Manage user profiles

Appointment history tracking

Contributing:
1.Fork the repository:

2.Create a new branch:
git checkout -b feature-name

3.Commit your changes:
git commit -m "Description of changes"


Contact

For inquiries or issues, please contact:
Phone: 0245402719
Email: felixic360@gmail.com
GitHub: GyabaahFelix
4.Push to the branch:
git push origin feature-name

5.Submit a pull request
