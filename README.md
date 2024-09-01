# User Management Application

This project is a responsive web application that fetches user data from the JSONPlaceholder API, displays it in a tabular format, and provides advanced filtering capabilities. It is built with React, Redux, and TypeScript to ensure a robust and maintainable codebase.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Application Structure](#application-structure)
  - [Data Fetching](#data-fetching)
  - [User Table](#user-table)
  - [Advanced Filtering](#advanced-filtering)
  - [State Management](#state-management)
  - [Type Safety](#type-safety)
  - [Design and Styling](#design-and-styling)
- [Challenges Faced](#challenges-faced)
- [Conclusion](#conclusion)

## Features

- **Fetch All Users**: Retrieves a list of users from the JSONPlaceholder API using a GET request.
- **Display Users in a Table**: Users are displayed in a dynamic table with columns for name, username, email, and phone.
- **Advanced Filtering**: Search input fields for each column allow for real-time filtering of user data.
- **State Management**: Managed using Redux Toolkit for efficient handling of user data and filter states.
- **Type Safety**: TypeScript is applied throughout the project to reduce runtime errors and ensure robust typing.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: To manage application state.
- **TypeScript**: For type safety and improved code quality.
- **Axios**: For handling API requests to JSONPlaceholder.
- **CSS**: For styling the application with a focus on a clean and user-friendly interface.

## Getting Started

To get the project running on your local machine:

## Getting Started

To view the website locally:

1. Clone the repository: git clone https://github.com/Inna-Mykytiuk/management-test
2. Navigate into the project directory.
3. Open `index.html` in your web browser.

## Application Structure

### Data Fetching

Data is fetched from the JSONPlaceholder API using Axios. The user data is then stored in the Redux store for easy access and management across the application.

### User Table

The user table displays four columns: name, username, email, and phone. The table is dynamic, rendering data from the Redux store.

### Advanced Filtering

Search input fields are implemented for each column in the user table. As users type in the search fields, the table dynamically filters the results, providing real-time updates.

### State Management

Redux Toolkit is used for managing the application state. The user data and filter states are stored in the Redux store, ensuring consistent and centralized state management.

### Type Safety

TypeScript is utilized throughout the application, providing type definitions for API data, Redux states, and component props. This reduces potential runtime errors and enhances code maintainability.

### Design and Styling

The application is styled using CSS, focusing on a clean and responsive design. The user table and search inputs are designed to be intuitive and easy to use.

### Challenges Faced

Implementing real-time filtering across multiple columns required careful consideration of performance, especially with large datasets. Ensuring type safety across complex data structures also presented challenges, which were addressed with thorough TypeScript integration.

### Conclusion

This project demonstrates a robust approach to managing and displaying user data with advanced filtering capabilities. The use of Redux Toolkit and TypeScript ensures the application is maintainable and scalable, while the clean design provides a positive user experience.

![preview](https://github.com/Inna-Mykytiuk/..../blob/main/assets/111.jpg)
