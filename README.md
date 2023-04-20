# Project Title

## User Authentication App

## Description

This is a MERN application for user authentication, which includes registration, logging in, log out, forgot password, and reset password features. The application uses the MERN stack, which includes MongoDB as the database, Express.js as the server, React.js as the front-end, and Node.js as the back-end.

## Used Technologies

In this build I used Node.js, Express.js, MongoDb, Mongoose, React.js, Typecript, Nodemon, Morgan, Dotenv, Helmet, CORS, XSS-Clean, Express Rate Limit.

## How to install

Download and run npm install in both front-end and server folders, then create a .env file at the root of the server folder and set the following environment variables:

```bash
PORT=
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=
ETHEREAL_USERNAME=
ETHEREAL_PASSWORD=
```

Please note that for testing purposes, this application uses Ethereal SMTP. However, you are free to use any other SMTP service of your choice for sending emails.

Mongo uri example:

```bash
MONGO_URI=mongodb+srv://giorgi:yourClusterPassword@yourClusterName.zi9vxpj.mongodb.net/yourDatabaseName?retryWrites=true&w=majority
```

Then run npm start ins both folders in front-end and then in server.

## API Reference

### Auth

### Important

The first created user is admin!

#### Register

```http
  POST /api/v1/auth/register
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `name`     | `string` | **Required**. Your name     |
| `email`    | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

#### Login

```http
  POST /api/v1/auth/login
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

#### Logout

```http
  DELETE /api/v1/auth/logout
```

#### Forgot Password

```http
    POST /api/auth/forgot-password
```

| Parameter | Type     | Description                                                      |
| :-------- | :------- | :--------------------------------------------------------------- |
| `email`   | `string` | **Required**. The email of the account whose password you forgot |

#### Reset Password

```http
      POST /api/auth/reset-password
```

#### Verify Email

```http
      POST /api/auth/verify-email
```

### User

#### Get All User

Only Admin can access this route

```http
      GET /api/users
```

#### Get Single User

Only Admin can access this route

```http
      GET /api/users/{user id}
```

#### Show Current User

```http
      GET /api/users/showMe
```
