# Hyperlab Technical Test: Laravel + Docker + React + Inertia.js

This repository contains the solution for the Hyperlab Technical Test, implementing the development environment using **Laravel Sail (Docker)** and the frontend structure with **Inertia.js + React**.

---

## System Requirements

-   Docker Desktop (With WSL2 enabled on Windows)
-   Git
-   (Optional: WSL2/Linux terminal for the best experience)

## Setup and Execution Guide (Setup Instructions)

Follow these steps to bring up the development environment and the application:

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/yamilaguirre/hyperlab-technical-test.git](https://github.com/yamilaguirre/hyperlab-technical-test.git)
    cd hyperlab-technical-test
    ```

2.  **Configure Environment Variables:**
    Create your `.env` file from the example:

    ```bash
    cp .env.example .env
    ```

3.  **Start Docker and Laravel Sail:**
    This command downloads images, builds the containers (PHP, MySQL, Redis), and starts them in the background (`-d`).

    ```bash
    ./vendor/bin/sail up -d
    ```

4.  **Install Dependencies and Compile Assets:**
    Install PHP dependencies (Composer), run database migrations, and install/compile frontend assets (Vite/npm).
    ```bash
    ./vendor/bin/sail composer install
    ./vendor/bin/sail artisan key:generate
    ./vendor/bin/sail artisan migrate
    ./vendor/bin/sail npm install --legacy-peer-deps && ./vendor/bin/sail npm run build
    ```

## Application Access

Once the containers are running, the application will be accessible in your browser:

-   **Web Application:** `http://localhost`
-   **Authentication Views (Breeze):** `http://localhost/register` and `http://localhost/login`

---
