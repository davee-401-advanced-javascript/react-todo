# React - To Do App

## Author: Davee Sok & Ryan Geddes

[![Netlify Status](https://api.netlify.com/api/v1/badges/2b317bf0-8bb7-4e19-a9da-b6823036e130/deploy-status)](https://app.netlify.com/sites/davees-react-to-do-app/deploys)

## Overview

This is a todo app that allows a user to assign task with different difficulty levels to multiple people. It performs crud operations via a node backend. The learning objective was to use react, props & states, routing, hooks, context, and basic authentication/authorization.

## Links and Resources:

- [Front-End Website](https://davees-react-to-do-app.netlify.app/)
  - username: admin
  - password: admin
- [Back-End Repository](https://github.com/davee-401-advanced-javascript/authenticated-api-server)
- [Back-End - Authenticated API Server](https://davee-auth-api-server.herokuapp.com/api/v1/todo)
- [Lab 31 Pull Request](https://github.com/ryangeddes-401-advanced-javascript/react-todo/pull/2)
- [Lab 32 Pull Request](https://github.com/ryangeddes-401-advanced-javascript/react-todo/pull/5)
- [Lab 33 Pull Request](https://github.com/ryangeddes-401-advanced-javascript/react-todo/pull/7)
- [Lab 34 Pull Request](https://github.com/ryangeddes-401-advanced-javascript/react-todo/pull/8)

## User Stories

- As a user, I would like an easy way to add a new to do item using an online interface
- As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
- As a user, I would like to delete to do items that are no longer needed
- As a user, I would like to easily mark to do items as completed
- As a user, I would like to edit an existing to do item

## Business Requirements

The To Do Manager application has the following overall requirements:

- Header, Main Section Footer
- Use React [Bootstrap](https://react-bootstrap.github.io/) for styling and visual components

- The header should present the application title and main menu

  - Home Link, which shows the list of To Do Items as noted below
  - A Login/Register/User section

    - When a user is **not logged in**:

      - Show Login and Register links
        - Login: Renders a Login Form
        - Register: Renders a new user registration form
          - Require Fields:: Username, Password, Email, Role

    - When a user **is logged in**:
      - Show “Welcome username”
      - Show a “Logout” link
        - When clicked, this should remove any cookies you have set and remove access

- In the “Main” section

  - Nothing should be visible until a user has logged in successfully
  - **The list of items in the to do list**

    - Based on user preferences, show listings in groups of (5, 10, etc) and provide the ability to view multiple “pages” of results
    - Each item in list should show the text of the item as well as the assignee

      - Based on user preferences, hide or show completed items
      - If shown, completed items should be styled differently making their status visually obvious

    - For users with “Update” permissions

      - When an item is clicked, toggle the “complete” status of the item.

    - For users with “Delete” permissions

      - Items should have a delete button associated with them
        - When clicked, remove the item from the list

    - For users with “Create” permissions …

      - **A Form where the user can a new item to the todo list**

        - Items should have the following fields:

          - To Do Item Text
          - Assigned To
          - Status (complete/incomplete)
          - Difficulty (number between 1 and 5)
          - i.e.

            ```javascript
            const todo = mongoose.Schema({
              text: { type: String, required: true },
              assignee: { type: String },
              complete: { type: Boolean, default: false },
              difficulty: { type: Number, default: 1 },
            });
            ```

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
2. ES6 Classes
3. Settings delivered to the application using Context
4. User Login & Permissions delivered to the application using Context
5. Local Storage / Cookies for storing login status
6. Local Storage / Cookies for storing user preferences
7. Superagent or Axios for performing API Requests
8. React Bootstrap for styling
9. Test Driven Development, using Jest
   - Tests will be runnable locally
10. Deployment to cloud provider

## Getting Started

- Clone down this repo
- Create an .env file with the following

```
REACT_APP_API= <<This will need to be the address to your node API server >>
REACT_APP_SECRET= <<This is variable will need to match the secret key on the back end server. Used to authenticate a token>>
```

- See Back End Repo for reference: [Back-End Repository](https://github.com/davee-401-advanced-javascript/authenticated-api-server)
- Install dependencies : `npm install`
- Run : `npm start`
