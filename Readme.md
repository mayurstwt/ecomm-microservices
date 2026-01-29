# Ecommerce Microservices

A microservices-based ecommerce backend application built with Node.js, TypeScript, and Docker.

## 🏗 Architecture

The system consists of independent services orchestrated using Docker Compose:

*   **API Gateway** (Nginx): The entry point for all client requests, routing traffic to appropriate services.
*   **Auth Service**: Handles user authentication and authorization using PostgreSQL.
*   **Product Service**: Manages product catalog and inventory using MongoDB.
*   **Cart Service**: Manages user shopping carts using Redis.
*   **Order Service**: Manages user orders using PostgreSQL.

## 🛠 Tech Stack

*   **Runtime**: Node.js
*   **Language**: TypeScript
*   **Databases**:
    *   PostgreSQL (Auth Service, Order Service)
    *   MongoDB (Product Service)
    *   Redis (Cart Service)
*   **Infrastructure**: Docker, Docker Compose
*   **ORM**: Prisma
*   **Gateway**: Nginx

## 🚀 Getting Started

### Prerequisites

*   **Docker** and **Docker Compose** installed on your machine.
*   **Node.js** (optional, for local development outside containers).

### Installation & Running

1.  **Clone the repository**
    ```bash
    git clone https://github.com/mayurstwt/ecomm-microservices
    cd ecommerce-microservices
    ```

2.  **Environment Setup**
    The services communicate via Docker networking. Ensure `.env` files are present in the service directories if customized configuration is needed.
    *   `services/auth-service/.env`
    *   `services/product-service/.env`
    *   `services/cart-service/.env`
    *   `services/order-service/.env`
    
    *Note: The `docker-compose.yml` already handles most environment variables for a quick start.*

3.  **Start the Application**
    Run the following command to build and start all services:
    ```bash
    docker-compose up --build
    ```

    This will spin up:
    *   `api-gateway` on port `8080`
    *   `auth-service` on port `4001`
    *   `product-service` (internal)
    *   `auth-db` (Postgres) on port `5433`
    *   `product-db` (Mongo) and `mongo-init` script
    *   `cart-service` (internal)
    *   `cart-db` (Redis)
    *   `order-service` (internal)
    *   `order-db` (Postgres)

4.  **Access the Services**

    The API Gateway is available at `http://localhost:8080`.

    *   **Auth Routes**: `http://localhost:8080/auth/...` (Proxied to Auth Service)
    *   **Product Routes**: `http://localhost:8080/products/...` (Proxied to Product Service)
    *   **Cart Routes**: `http://localhost:8080/cart/...` (Proxied to Cart Service)
    *   **Order Routes**: `http://localhost:8080/orders/...` (Proxied to Order Service)

## 📂 Project Structure

```
├── api-gateway/         # Nginx configuration and Dockerfile
├── services/
│   ├── auth-service/    # User authentication service (Express + Prisma + Postgres)
│   ├── product-service/ # Product management service (Express + Prisma + Mongo)
│   ├── cart-service/    # Shopping cart service (Express + Redis)
│   └── order-service/   # Order management service (Express + Prisma + Postgres)
└── docker-compose.yml   # Container orchestration
```

## 🐛 Troubleshooting

*   **Database Constraints**: If services fail to connect to databases immediately on startup, give it a few seconds. The `depends_on` condition is set, but databases might take a moment to be ready.
*   **Port Conflicts**: Ensure ports `8080`, `4001`, and `5433` are free on your host machine.
