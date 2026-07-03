# Student Dashboard (React)

A simple Student Dashboard built with React as part of a module assignment. The project demonstrates the fundamentals of React, including components, props, state management, event handling, conditional rendering, controlled forms, and component composition.

## Features

- Display student information using reusable components
- Responsive student cards with profile photos
- Navbar showing the total number of students
- Conditional rendering for batch status
- Add new students using a controlled form
- Delete students dynamically
- Component composition using React components
- State management with `useState`
- Error Boundary implementation for handling runtime errors gracefully

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS (Inline Styling)

## Project Structure

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── Navbar.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── StudentForm.jsx
│   ├── BatchStatus.jsx
│   ├── ErrorBoundary.jsx
│   └── ErrorFallback.jsx
├── data/
│   └── students.js
├── App.jsx
└── main.jsx
```

## How to Run

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Install dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm run dev
```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## What I Learned

While building this project, I practiced:

- Creating reusable React components
- Passing data through props
- Managing state with `useState`
- Rendering lists with `map()`
- Conditional rendering using different approaches
- Handling user events
- Building controlled forms
- Lifting state up between components
- Using an Error Boundary to prevent the application from crashing

## Note

- Student information is loaded from `students.js`.
- Added or deleted students exist only while the application is running. Refreshing the page restores the original data because no backend or database is connected.
- Student profile photos are stored locally inside the `assets/images` folder.

## Author

**Mohammad Ullah**