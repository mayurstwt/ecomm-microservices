# Daily Restart & Resume Guide (Auth Microservice)

This document explains **exactly** how to stop, resume, and safely continue work on the e‑commerce auth microservice after shutting down your laptop.

---

## Assumptions

* Docker Desktop is installed
* You are working inside the same project repository
* No data reset is required
* You are using Docker Compose

Project root contains `docker-compose.yml`.

---

## 🚀 Daily Start (After Laptop Shutdown)

### 1️⃣ Start Docker Desktop (Manual)

* Open **Docker Desktop**
* Wait until it shows **“Docker is running”**

> Docker CLI commands will fail or behave unpredictably if Docker Desktop is not running.

---

### 2️⃣ Navigate to Project Root

```bash
cd ~/Desktop/Projects/small-builds/ecommerce-microservices
```

---

### 3️⃣ Start All Services (Main Command)

```bash
docker compose up -d
```

**What this does:**

* Starts `auth-db` (PostgreSQL)
* Starts `auth-service` (Node + Prisma)
* Reuses existing Docker images
* Does **not** rebuild anything

This is the **primary resume command**.

---

### 4️⃣ Verify Services Are Running (Recommended)

```bash
docker compose ps
```

Expected output:

```
auth-db        Up
auth-service   Up
```

If both services are `Up`, you are exactly where you left off.

---

### 5️⃣ (Optional) View Logs

```bash
docker compose logs -f auth-service
```

Stop viewing logs with:

```
Ctrl + C
```

---

## ❌ Commands You Do NOT Run Daily

Only run these **when something changes**.

| Command                  | When to Run                             |
| ------------------------ | --------------------------------------- |
| `docker compose build`   | Dockerfile or system dependency changes |
| `npm install`            | `package.json` changes                  |
| `npx prisma migrate dev` | Prisma schema changes                   |
| `npx prisma generate`    | Auto-handled by Prisma                  |
| `docker compose down`    | You want to stop everything manually    |

---

## 🔁 Common Development Scenarios

### 🧠 Scenario 1: Backend Code Changed (TypeScript / JS)

```bash
docker compose up -d --build
```

Rebuilds `auth-service` image and restarts it.

---

### 🧠 Scenario 2: Prisma Schema Changed

```bash
docker compose exec auth-service npx prisma migrate dev --name <migration_name>
```

Example:

```bash
docker compose exec auth-service npx prisma migrate dev --name add_refresh_token
```

---

### 🧠 Scenario 3: Something Feels Broken

Safe reset (does **not** delete DB data):

```bash
docker compose down
docker compose up -d
```

---

## 🧠 One‑Line Mental Model

> **Start work → `docker compose up -d`**
> **Stop work → Close laptop**

Everything else is situational.

---

## 📌 Minimal Cheat Sheet

```bash
# Start where I left off
docker compose up -d

# Check status
docker compose ps

# See logs
docker compose logs -f auth-service

# Rebuild after code change
docker compose up -d --build

# Run Prisma migration
docker compose exec auth-service npx prisma migrate dev --name <name>
```

---

## ✅ You Are Safe If

* Docker Desktop is running
* You run `docker compose up -d`
* You see both services as `Up`

That’s it. No reconfiguration needed.

---

**Next recommended step:**

* Auth Service Phase 2 — Register & Login APIs
