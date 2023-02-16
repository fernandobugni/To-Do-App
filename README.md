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

Moreover, the ORM gives you a workflow where first you define the model, and then you run a script to modify the database to reflect the changes. We can see these scripts in `backend-app/src/migrations/`. These are the commands to interact with the ORM

```
npm run makemigrations
npm run migrations
```
The following is an image of the database

![Database](/img/Captura%20desde%202023-02-15%2021-58-30.png "Database")


## Automated tests
Testing could be run using the following command
``npm run test``
This runs the tests in another database apart from PostgreSQL. They run in SQLite in a file called `test_db.sqlite3`. Unfortunately, I couldn't find a UI interface for testing but there seems to be a plugin in VS code to do it. 

## Workflow and Swagger
I coded different endpoints to cover all the Use cases. All of them are functional using the backend API and also I added Swagger to test all of them. 

![Swagger](/img/Captura%20desde%202023-02-14%2023-59-47.png "Swagger")

The endpoints are: 

* **Sign up and login (`/auth/*`):**

You can sign up as a new user and then login. Notice that if you are not logged in you cannot access the to-do list

* **CURD To-Do (`/todos/*`):**

To access the to-do list of every user. You must be logged in

* **Save click in translate (`/users/setClickedInTranslate/...`)**

The idea is to store if a user has clicked the button ´translate´, and use this endpoint to store the event.

* **Normal UI**

Using the endpoints of `/auth/*` and `/todos/*`, we can recreate the webpage for the users.

* **Admin UI**

Using `/adminPanel/*` we can create the panel for the admin users. 

There are some screenshots of how to use it:

![Swagger](/img/Captura%20desde%202023-02-15%2000-00-42.png "Swagger")


![Swagger](/img/Captura%20desde%202023-02-15%2000-00-11.png "Swagger")


## Frontend-app

Unfortunately, I'm not familiar with Angular so I couldn't code using it. I ended up using React but I cannot finish all the screens. The following are some of them

![Webpage](/img/Captura%20desde%202023-02-14%2023-59-13.png "Webpage")


![Webpage](/img/Captura%20desde%202023-02-14%2023-59-24.png "Webpage")

All the buttons are functional except for the `Translate` button which is not finished due to a lack of time. But in theory, when a user clicks on `translate` button, the frontend has to send a ``POST`` HTTP request to a translation API and then return the response. Then the application, in the background, has to store that this user has been using the translation in the database using `/users/setClickedInTranslate/` endpoint.

## How to deploy in Google Cloud

I tried to use a free account for Google Cloud but unfortunately, the signup form asks for a credit card, so I think that it is too much to put my credit card in to deploy a programming challenge. So instead, I'm going to explain how to do it here.

First of all, we have to generate the Docker images for each artifact. To do this, we have to define the Docker files which are at the root of each project with the name `Dockerfile`. It contains how to precisely run the application in an image. Also, we have to expose the port to connect from outside the image. 

After we can build the image, we have to push to a container registry using the following commands:

```
docker build --build-args -t [name of the image]

docker push [name the container registry]
```

Now we have the image in the container registry. The second phase is to define a `yaml file` to describe a **Kubernetes configuration**. The idea is to build the image in a K8s cluster using this configuration. The most important thing is that they have to be type **Deployment** and that you need an **Ingress service** to connect from outside to the world. Otherwise, you are not going to reach the application.

## Triggers
Another interesting topic is to use triggers to optimize different tasks. For example, we can use **Google Cloud Build** to listen to a branch and when it detects a change, it builds an image automatically. Similar tasks are defined in **GitHub Actions** but it has predefined templates to run specific tasks. In my current job, we are starting using both but at a slow pace. We used to have **Jenkins** which is the same idea and was useful for the whole team.  

Thanks for reading!





