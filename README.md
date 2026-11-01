# FSD Lab Assignment 3: Task Manager

Name: Pratham Singh  
PRN: 1032211384

A responsive To-Do List built with React and a MySQL database. Add a task, mark it done or delete it.

## Run

Start MySQL and create the database (only needed once):

```bash
brew services run mysql
mysql -u root < server/database.sql
```

Install the packages:

```bash
npm install
```

Start the server in one terminal:

```bash
npm run server
```

Start the React app in a second terminal:

```bash
npm run dev
```

Then open the link shown in the terminal.

## Concepts used

- Components: `Header`, `TaskForm`, `TaskList`, `TaskItem`
- Class component: `Header`
- State: `tasks` in `App`, `text` in `TaskForm`
- Props: data and functions passed from `App` to child components
- Events: `onSubmit`, `onChange`, `onClick`
- Responsive design: media query in `src/index.css`
- Database: `tasks` table in MySQL, used through the Express API in `server/server.js`
