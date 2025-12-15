# Hyperlab Technical Test: Laravel + Docker + React + Inertia.js

This repository contains the solution for the Hyperlab Technical Test, implementing the development environment using **Laravel Sail (Docker)** and the frontend structure with **Inertia.js + React**.

---

## System Requirements

-   Docker Desktop
-   Git

## Setup and Execution Guide

Follow these steps to bring up the development environment and the application:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/yamilaguirre/hyperlab-technical-test.git
    cd hyperlab-technical-test
    ```

2.  **Configure Environment Variables:**

    ```bash
    cp .env.example .env
    ```

3.  **Start Docker and Laravel Sail:**

    ```bash
    ./vendor/bin/sail up -d
    ```

4.  **Install Dependencies:**

    ```bash
    ./vendor/bin/sail composer install
    ./vendor/bin/sail artisan key:generate
    ```

5.  **Run Migrations:**

    ```bash
    ./vendor/bin/sail artisan migrate
    ```

6.  **Compile Frontend Assets:**

    ```bash
    ./vendor/bin/sail npm install --legacy-peer-deps
    ./vendor/bin/sail npm run dev
    ```

## Application Access

Once the containers are running and vite is active:

-   **Base URL:** `http://localhost`
-   **Onboarding:** Register a new user to start the onboarding process.
## Features Implemented

-   **Authentication:** Custom login and registration pages using Inertia.js.
-   **Onboarding Flow:** Multi-step wizard for user profile completion.
-   **File Storage:** Profile images are stored as local files (mapped to `public/storage`) instead of database blobs.
-   **Responsive Design:** Mobile-first approach using Tailwind CSS.
