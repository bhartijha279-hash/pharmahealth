# PharmaHealth 💊🏥

PharmaHealth is a comprehensive modern pharmaceutical and healthcare management platform built with Spring Boot (Java), React, PostgreSQL, JWT Authentication, and Docker.

---

## 🏗️ Architecture & Tech Stack

- **Backend**:
  - Java 21 / 25
  - Spring Boot 3.3.x (Spring Web, Spring Security, Spring Data JPA)
  - Maven
  - JWT Authentication & Authorization (`io.jsonwebtoken`)
  - PostgreSQL (Supabase in production) & Hibernate ORM
  - RESTful APIs with Swagger/OpenAPI documentation
- **Frontend**:
  - React 18+ (Vite)
  - Bootstrap 5 & Bootstrap Icons
  - Axios for API communication
  - React Router for seamless navigation
- **Static Page**:
  - High-performance responsive static landing & showcase page
- **DevOps & Containers**:
  - Docker & Docker Compose
  - Hosting: Vercel (frontend), Render (backend, `render.yaml`), Supabase (PostgreSQL)
  - GitHub Actions CI/CD (`.github/workflows/ci.yml`)

---

## 📁 Repository Structure

```text
PharmaHealth/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow
├── backend/                     # Spring Boot Maven application
│   ├── src/                     # Java source code and resources
│   ├── pom.xml                  # Maven dependencies & plugins
│   └── Dockerfile               # Backend container definition
├── frontend/                    # React + Vite + Bootstrap application
│   ├── src/                     # Components, pages, services, styling
│   ├── package.json             # NPM dependencies
│   ├── vercel.json              # Vercel deployment config
│   └── Dockerfile               # Frontend container definition
├── static-page/                 # Static marketing / showcase landing page
│   ├── index.html
│   ├── css/style.css
│   └── assets/
├── .gitignore                   # Multi-language git ignore
├── docker-compose.yml           # Multi-service local environment setup
├── Dockerfile                   # Multi-stage production container build
├── README.md                    # Project documentation
└── render.yaml                  # Render blueprint for the backend
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Git**
- **Docker & Docker Compose** (Recommended for full-stack run)
- **Java 21+** & **Maven**
- **Node.js 20+** & **npm**
- **PostgreSQL 16** (only if running the backend outside Docker)

### 2. Run with Docker Compose (Fastest)

```bash
docker-compose up --build
```

- **Backend API**: http://localhost:8080
- **Frontend App**: http://localhost:3000
- **PostgreSQL**: inside the compose network only (not published to the host)

The backend creates the tables and seeds demo data on first start.

### 3. Running Backend Locally

```bash
cd backend
mvn spring-boot:run
```

By default the backend connects to `jdbc:postgresql://localhost:5432/pharmahealth` (user `pharma_user`, password `pharma_password`). Override with the `SPRING_DATASOURCE_*` variables; see `backend/.env.example`.

### 4. Running Frontend Locally

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

---

## ☁️ Deploying (Supabase + Render + Vercel, all free tiers)

Set these up in order. Each step needs a value from the previous one.

### 1. Database: Supabase
1. Create a project at [supabase.com](https://supabase.com/dashboard) and save the database password.
2. Open **Connect** and copy the **Session pooler** connection details (host `aws-0-<region>.pooler.supabase.com`, port `5432`, user `postgres.<project-ref>`). Use the session pooler: the direct connection needs IPv6, which Render does not support.
3. No SQL to run. The backend creates the tables on first start.

### 2. Backend: Render
1. In [Render](https://dashboard.render.com/), choose **New -> Blueprint** and connect this repository. It reads [`render.yaml`](render.yaml) and creates the `pharmahealth-backend` web service.
2. Fill in the variables it asks for:

| Variable | Value |
|---|---|
| `SPRING_DATASOURCE_URL` | `jdbc:postgresql://aws-0-<region>.pooler.supabase.com:5432/postgres?sslmode=require` |
| `SPRING_DATASOURCE_USERNAME` | `postgres.<project-ref>` |
| `SPRING_DATASOURCE_PASSWORD` | your Supabase database password |
| `ADMIN_PASSWORD` | a strong password for the `admin` account |
| `ALLOWED_ORIGINS` | your Vercel URL, e.g. `https://pharmahealth.vercel.app` (fill in after step 3, then redeploy) |

`JWT_SECRET` is generated automatically, and demo customers/orders are turned off (`SEED_DEMO_DATA=false`).

3. When it's live, `https://<service>.onrender.com/api/public/health` should return `"status":"UP"`.

> The free Render instance sleeps after 15 minutes without traffic and takes about a minute to wake. The frontend waits and retries, so the first load after a quiet period is just slow.

### 3. Frontend: Vercel
1. In [Vercel](https://vercel.com/new), import this repository.
2. Set **Root Directory** to `frontend` (build settings come from [`frontend/vercel.json`](frontend/vercel.json)).
3. Add the environment variable `VITE_API_BASE_URL` = `https://<service>.onrender.com/api`.
4. Deploy, then put the resulting URL into `ALLOWED_ORIGINS` on Render.

---

## 🔐 Default Seed Credentials

| Role | Username | Password |
|---|---|---|
| **Admin** | `admin` | `admin123` locally; in production, the `ADMIN_PASSWORD` you set |
| **Customer** | `rohit.sharma` | `password123` |
| **Customer** | `ananya.verma` | `password123` |
| **Customer** | `rahul.mehta` | `password123` |

The customer accounts are demo data and exist only when `SEED_DEMO_DATA=true` (the default for local and Docker runs).

Additional admin/pharmacist accounts can be created by an admin from the dashboard (`POST /api/users/create-admin`).

---

## 📄 License
MIT License.
