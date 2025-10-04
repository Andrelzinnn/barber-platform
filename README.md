# Barber Platform

A complete platform for scheduling services in barbershops, designed to offer a modern and efficient user experience for both clients and administrators.

## ✨ Features

- **Service Scheduling**: Clients can view available services and schedule appointments with ease.
- **User Authentication**: Login and registration system for clients and administrators.
- **Admin Dashboard**: Panel for administrators to manage services, schedules, and appointments.
- **Service Search**: Search functionality to find specific services.
- **Responsive Interface**: Adaptive design for a consistent experience on desktops and mobile devices.

## 🚀 Technologies Used

- **React**: A library for building reactive and component-based user interfaces.
- **Vite**: A next-generation build and development tool, offering an extremely fast development environment.
- **TypeScript**: A superset of JavaScript that adds static typing, increasing the robustness and maintainability of the code.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly and efficiently.
- **React Router**: For managing routes and navigation in the application.
- **Axios**: An HTTP client to make requests to the API in a simple and secure way.
- **Zod & React Hook Form**: For schema validation and declarative and efficient form management.
- **Bun**: A modern and fast JavaScript toolkit, used as a package manager and script runner.

## Backend API

The platform's backend is a RESTful API developed in a separate project, located at `~/.projects/barber-api`. The API is responsible for all business logic, including authentication, user management, services, and appointments.

## 🏁 Getting Started

Follow the steps below to set up and run the project in your local environment.

### Prerequisites

- You need to have [Bun](https://bun.sh/) installed on your machine.
- Make sure the [backend API](https://github.com/your-username/barber-api) is running.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/barber-platform.git
   ```
2. Navigate to the project directory:
   ```sh
   cd barber-platform
   ```
3. Install the dependencies:
   ```sh
   bun install
   ```

### Running the Project

To start the development server, run the command:

```sh
bun run dev
```

The application will be available at `http://localhost:5173` (or the port indicated by Vite).

## 📜 Available Scripts

In `package.json`, you will find the following scripts:

- `bun run dev`: Starts the application in development mode with hot-reloading.
- `bun run build`: Compiles and optimizes the application for production.
- `bun run lint`: Runs ESLint for static code analysis and problem identification.
- `bun run preview`: Starts a local server to preview the production build.

## 🤝 Contributing

Contributions are welcome! If you want to contribute to the project, follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.