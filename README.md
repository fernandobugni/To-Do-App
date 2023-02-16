# To-Do-App
ToDo App using FoalTS

# Usage
To run this program go to backend-app folder and run:

``/backend-app$ npm run dev``

Then run the following in the frontend-app folder

``frontend-app$ npm run start``

# Content
## Why I chose FoalTS
Considering that all is written in TypeScript and has many different features, such as ORM, deployment environments, CLI utilities and authentication, etc. I decided to use it.

## Why I divided the project into two parts
The division consists of two parts of every website should have: the backend and frontend. And they have to deploy separately to decouple problems. For example, we can scale the API (backend) but not the frontend because mostly it is static. Also, it is beneficial for the division of tasks between teams

## Database connection and ORM configuration
To store the data, we need a PostgreSQL that is defined in the `backend-app/.env` file. As I mentioned, FoalTS uses an ORM and you can define scripts to interact with the database. For example, you can run `foal run create-todo text="Task 1"` and add a Task in the database.

Moreover, the ORM gives you a workflow where first you define the model, and then you run a script to modify the database to reflect the changes. We can see this scripts in `backend-app/src/migrations/`. These are the commands to interact with the ORM

```
npm run makemigrations
npm run migrations
```
The following is an image of the database

![Database](/img/Captura%20desde%202023-02-15%2021-58-30.png "Database")


## Automated tests

## Workflow and Swagger
* Sign up and login
* Add an item ToDo 
* Normal UI
* Admin UI

## Frontend-app

## How to deploy in Google Cloud
not put my credit card




