# connect_backend

This is the backend API for the **Connect Tasks** full-stack project built for the coding challenge at **Connect Education**.

It’s powered by **NestJS**, **Prisma**, and **PostgreSQL**, and is deployed on **Render**.

---

## Live API

**Base URL:** [https://connect-backend-um9n.onrender.com](https://connect-backend-um9n.onrender.com)

### Auth Endpoints

- `POST /auth/register` – Create a new user account  
- `POST /auth/login` – Authenticate and receive a JWT token

### Task Endpoints 

- `GET /tasks` – Get all tasks created by the logged-in user  
- `POST /tasks` – Create a new task  
- `PUT /tasks/:id` – Update a task by ID  
- `DELETE /tasks/:id` – Delete a task by ID


## Tech Stack

- **Framework:** [NestJS] (Node.js)
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT-based
- **Password Hashing:** bcryptjs
- **Deployment:** [Render]

---
⚠️ Note: The backend is hosted on a free Render instance. If it hasn't received traffic in the past few minutes, it may take a few seconds to respond the first time it's accessed.
## Environment Variables

Add the following to your `.env` file (not included in Git):

```env
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db_name>
JWT_SECRET=your_secret_key
