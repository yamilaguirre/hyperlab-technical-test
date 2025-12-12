# Hyperlab Technical Test: Laravel + Docker + React + Inertia.js

This repository contains the solution for the Hyperlab Technical Test, implementing the development environment using **Laravel Sail (Docker)** and the frontend structure with **Inertia.js + React**.

---

## Project Goal Completion Status

-   **Instructions 1 & 2 (Initial Setup & Breeze Auth):** **COMPLETED.** Project is running locally, and Blade authentication views are functional.

---

## System Requirements

-   Docker Desktop (With WSL2 enabled on Windows)
-   Git

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
    Run Composer and Artistan commands, and handle Node/Vite compilation.
    ```bash
    ./vendor/bin/sail composer install
    ./vendor/bin/sail artisan key:generate
    ./vendor/bin/sail artisan migrate
    ./vendor/bin/sail npm install --legacy-peer-deps && ./vendor/bin/sail npm run build
    ```

## Application Access and Key Endpoints

Once the containers are running, the application is accessible in your browser:

-   **Base URL:** `http://localhost`
-   **Authentication Views:** `http://localhost/register` and `http://localhost/login`

---

## Onboarding Flow (Instruction 4)

This section details how to access and test the custom-built React + Inertia onboarding screens.

_(**NOTE:** Update this section once Instruction 4 is complete, detailing the specific URL or flow required to view the screens.)_

**To view the Onboarding Flow:**

_(e.g., Navigate to `http://localhost/onboarding` or follow the registration process.)_
