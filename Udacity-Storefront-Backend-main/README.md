# UDACITY

StoreFront Backend

Project using:

- expressjs
- bycrypt
- postgres
- typeOrm
- jwt

## project setup instructions

The app port: 3000

Postgres db port: 5432

```bash
// install dependencies
$ npm install

// create .env file ( in window )
$ xcopy .env.example .env

// setup db
$ docker-compose up

// run migration to create datbase and seeder
$ npm run migration:up:dev

// run in watch mode
$ npm run dev
```

## Running the app

```bash
# development
$ npm run dev
```

## Test

```bash
# setup db
$ docker-compose up

# run migration in test database
$ npm run migration:up:test

# unit tests using jasmine
$ npm run test
```

## Endpoint document

    ``` check in REQUREMENTS.md ```
