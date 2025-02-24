# To-Do List Application

## Description

This is a simple To-Do List Application built using React. The application allows users to register, log in, create tasks, update tasks, and delete tasks while maintaining authentication using session storage.

## Features

- User Registration & Login
- Create, Read, Update, and Delete (CRUD) tasks
- Authentication using session storage
- Protected routes for task management

## Technologies Used

- React.js
- React Router
- Context API for state management
- Axios for API requests
- CSS Modules for styling

## Project Structure

```
/src
  ├── components
  │   ├── context
  │   │   ├── Context.jsx
  │   ├── helper
  │   │   ├── PrivateRoute.jsx
  │   ├── router
  │   │   ├── Router.jsx
  │   ├── services
  │   │   ├── Service.jsx
  │   ├── task
  │   │   ├── Creation.jsx
  │   │   ├── Gettask.jsx
  │   │   ├── Updatetask.jsx
  │   ├── user
  │   │   ├── Login.jsx
  │   │   ├── Register.jsx
  ├── App.jsx
  ├── main.jsx
```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```sh
   cd to-do-list
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## JSON SERVER INSTALLATION

1) To install  globally json-server and run locally

```sh npm install -g json-server```

2) create a db.json file outside the src and create a user with array of objects.

# example: db.json

```sh
{
    "user":[
        {
            "id":1,
            "username":"saiprakash",
            "password":"12345"
        }
    ]
}
```

3) To run the json server

# npx json-server --watch filename(db.json) and link will be generated then navigate to that (http://localhost:3000)


4) # Ctrl+c to end the server or terminate the server

## API Endpoints

The application interacts with a backend API hosted locally:

- **User Registration:** `POST http://localhost:3000/user`
- **User Login:** `GET http://localhost:3000/user`
- **Create Task:** `POST http://localhost:3000/task`
- **Get Tasks:** `GET http://localhost:3000/task?userid={userId}`
- **Update Task:** `PUT http://localhost:3000/task/{taskId}`
- **Delete Task:** `DELETE http://localhost:3000/task/{taskId}`

## Usage

1. Register a new account on the home page.
2. Log in using the registered credentials.
3. After successful login, create new tasks.
4. View, update, or delete tasks from the task dashboard.
5. Log out when done.

## Protected Routes

The application includes protected routes to ensure that only authenticated users can access task-related features:

- `/createtask`
- `/gettask`
- `/updatetask`

## Contributions

Contributions are welcome! If you find issues or want to add features, feel free to open a pull request.

## License

This project is open-source and available under the MIT License.

---

Developed by Konapa Saiprakash Reddy

