# monorepo-todolist

This is a basic todolist app

## How to run it

1. Clone this repository

1. Be sure you have installed `docker` and `docker-compose` on your machine.
    
    If you dont have `docker-compose` installed, follow this guide to install it on your OS.
    - *Docker:* https://docs.docker.com/get-docker/
    - *Docker Compose:* https://docs.docker.com/compose/install/

1. Run
    ```bash
    docker-compose up -d --build
    ```
   
    - It will run a database in postgres, then it will start the Django server, at last it will mount a nginx server to deploy the portal

## Information

### Database

You can access to the database using your favorite database manager with following credentials

```
DATABASE_HOST=127.0.0.1
DATABASE_NAME=todolist-db
DATABASE_PASSWORD=backend
DATABASE_PORT=5432
DATABASE_USER=backend
```

### Backend

You can open the API on your web browser typing
http://localhost:8080

### Portal

You can open the portal on your web browser typing
http://localhost
