# Habit Tracking App

This is a simple Habit Tracking Angular application that allows users to track and manage their habits.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Component:** Allows users to add new habits with a name and description.
- **Habits Component:** Displays a list of habits retrieved from the Habit Tracker API and updates in real-time when new habits are added.
- **Navigation:** Users can navigate between the Home and Habits components using the Angular Router.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime.
- [Angular CLI](https://angular.io/cli) - Command Line Interface for Angular.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/habit-tracking-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd habit-tracking-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

   The app will be available at `http://localhost:4200/`.

## Usage

1. Open your web browser and navigate to `http://localhost:4200/`.
2. Use the "Add Habit" button in the Home component to create new habits.
3. Navigate to the Habits component to view the list of habits.

## Folder Structure

The project follows a standard Angular project structure:

```
habit-tracking-app/
|-- src/
|   |-- app/
|       |-- home/
|       |   |-- home.component.html
|       |   |-- home.component.css
|       |   |-- home.component.ts
|       |-- habits/
|       |   |-- habits.component.html
|       |   |-- habits.component.css
|       |   |-- habits.component.ts
|       |-- app-routing.module.ts
|       |-- app.component.html
|       |-- app.component.css
|       |-- app.component.ts
|       |-- ...
|-- angular.json
|-- package.json
|-- ...
```

## Technologies Used

- [Angular](https://angular.io/) - Web application framework.
- [Angular CLI](https://angular.io/cli) - Command Line Interface for Angular.
- [RxJS](https://rxjs.dev/) - Reactive programming library.
- [HttpClient](https://angular.io/guide/http) - Angular module for making HTTP requests.
