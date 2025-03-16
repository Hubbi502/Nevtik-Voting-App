# NEVTIK Voting App

A voting application for managing candidate elections with user authentication and voting capabilities.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)

## Overview

The NEVTIK Voting App is a full-stack web application designed to facilitate voting processes. It allows users to register, log in, and cast votes for candidates. Administrators can create candidates, view voting statistics, and manage users.

## Features

- **User Management**
  - User registration and authentication
  - JWT token-based authorization
  - Role-based access control (Admin/User)
  - User profile management

- **Candidate Management**
  - Create, view, and delete candidates
  - Upload candidate images
  - Detail candidate vision and mission statements

- **Voting System**
  - Single vote per user
  - Real-time vote statistics and percentages
  - Winner determination

- **Administration**
  - Dashboard for vote tracking
  - User management
  - Voting statistics and reports

## Tech Stack

### Backend
- Node.js with Express
- Prisma ORM
- MySQL Database
- JWT Authentication
- Clerk Authentication (alternative option)
- Bcrypt password hashing
- Zod for validation

### Dependencies
- Express.js - Web framework
- Prisma - ORM for database access
- Bcrypt - Password hashing
- JWT - Authentication tokens
- Clerk SDK - Alternative authentication
- Multer - File uploading
- Zod - Schema validation
- Cors - Cross-origin resource sharing
- Dotenv - Environment variables
- Cookie-parser - Cookie handling
- Nodemon - Development server

## Project Structure

```
backend/
├── prisma/
│   ├── migrations/         # Database migration files
│   └── schema.prisma       # Prisma schema definition
├── src/
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── libs/               # Utility libraries
│   ├── middleware/         # Express middleware
│   ├── public/             # Static files
│   ├── routes/             # API routes
│   ├── utils/              # Helper functions
│   ├── validation/         # Data validation schemas
│   └── server.js           # Application entry point
├── uploads/                # Uploaded files storage
├── nodemon.json            # Nodemon configuration
└── package.json            # Project dependencies
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- npm or yarn

### Installation Steps

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd nevtik-voting-app/backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the backend directory with the following variables:
   ```
   DATABASE_URL="mysql://username:password@localhost:3306/nevtik_voting"
   PORT=5000
   JWT_SECRET="your-secret-key"
   FRONTEND_URL="http://localhost:3000"
   CLERK_SECRET_KEY="your-clerk-secret-key" # If using Clerk
   ```

4. Initialize the database
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

## Database Schema

The application uses the following data models:

### User
- `id`: String (Primary Key, CUID)
- `email`: String (Unique)
- `divisi`: String (Optional)
- `name`: String
- `password`: String (Hashed)
- `role`: Enum (ADMIN, USER)
- `createdAt`: DateTime
- `updatedAt`: DateTime
- Relation: One-to-One with Vote

### Candidate
- `id`: String (Primary Key, CUID)
- `name`: String
- `vision`: Json
- `mission`: Json
- `divisi`: String
- `kelas`: String
- `jurusan`: String
- `image`: String
- `createdAt`: DateTime
- `updatedAt`: DateTime
- Relation: One-to-Many with Vote

### Vote
- `id`: String (Primary Key, CUID)
- `userId`: String (Unique)
- `candidateId`: String
- `createdAt`: DateTime
- Relations:
  - User (One-to-One)
  - Candidate (Many-to-One)

## API Documentation

### Authentication Endpoints

#### Register User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Auth Required**: Yes (Admin only)
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string",
    "divisi": "string"
  }
  ```
- **Response**: 
  ```json
  {
    "message": "User berhasil ditambahkan",
    "data": {
      "id": "string",
      "email": "string",
      "name": "string"
    }
  }
  ```

#### Login
- **URL**: `/auth/login`
- **Method**: `POST`
- **Auth Required**: No
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: 
  ```json
  {
    "message": "success",
    "data": {
      "id": "string",
      "email": "string",
      "name": "string",
      "token": "string"
    }
  }
  ```

#### Logout
- **URL**: `/auth/logout`
- **Method**: `POST`
- **Auth Required**: Yes
- **Response**: 
  ```json
  {
    "message": "Logout successful"
  }
  ```

### User Endpoints

#### Get All Users
- **URL**: `/auth/users`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "success",
    "data": [
      {
        "id": "string",
        "email": "string",
        "name": "string"
      }
    ]
  }
  ```

#### Get User by Email
- **URL**: `/auth/users/:email`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "success",
    "data": {
      "id": "string",
      "email": "string",
      "name": "string",
      "divisi": "string",
      "role": "USER",
      "createdAt": "date",
      "updatedAt": "date"
    }
  }
  ```

### Candidate Endpoints

#### Get All Candidates
- **URL**: `/candidates`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: 
  ```json
  {
    "message": "success",
    "data": [
      {
        "id": "string",
        "name": "string",
        "vision": {},
        "mission": {},
        "divisi": "string",
        "kelas": "string",
        "jurusan": "string",
        "image": "string",
        "createdAt": "date",
        "updatedAt": "date"
      }
    ]
  }
  ```

#### Create Candidate
- **URL**: `/candidates/add`
- **Method**: `POST`
- **Auth Required**: Yes (Admin only)
- **Body**:
  ```json
  {
    "name": "string",
    "vision": {},
    "mission": {},
    "divisi": "string",
    "kelas": "string",
    "jurusan": "string"
  }
  ```
- **Response**: 
  ```json
  {
    "message": "Candidate berhasil ditambahkan",
    "data": {
      "id": "string",
      "name": "string"
    }
  }
  ```

#### Delete Candidate
- **URL**: `/candidates/:id`
- **Method**: `DELETE`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "successful",
    "user": {
      "id": "string",
      "name": "string",
      "vision": {},
      "mission": {},
      "divisi": "string",
      "kelas": "string",
      "jurusan": "string",
      "image": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  }
  ```

#### Get Vote Counts by Candidate
- **URL**: `/candidates/votes`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "successful",
    "data": [
      {
        "name": "string",
        "votes": 0
      }
    ]
  }
  ```

#### Get Vote Percentages by Candidate
- **URL**: `/candidates/votes/persen`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "successful",
    "data": [
      {
        "name": "string",
        "percentage": "string"
      }
    ]
  }
  ```

#### Get Winner
- **URL**: `/candidates/votes/winner`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "Pemenang Ditemukan", // or "Seri!" if tied
    "data": [
      {
        "name": "string",
        "votes": 0
      }
    ]
  }
  ```

### Vote Endpoints

#### Cast Vote
- **URL**: `/vote/add`
- **Method**: `POST`
- **Auth Required**: Yes
- **Body**:
  ```json
  {
    "candidates": "string" // candidateId
  }
  ```
- **Response**: 
  ```json
  {
    "message": "Success",
    "data": {
      "id": "string",
      "userId": "string",
      "candidateId": "string",
      "createdAt": "date"
    }
  }
  ```

#### Get Vote Counts
- **URL**: `/vote/total`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "successful",
    "data": {
      "totalUsers": 0,
      "votedUsers": 0,
      "notVotedUsers": 0
    }
  }
  ```

#### Get Vote Percentages
- **URL**: `/vote/persen`
- **Method**: `GET`
- **Auth Required**: Yes (Admin only)
- **Response**: 
  ```json
  {
    "message": "successful",
    "data": {
      "votedPercentage": "string",
      "notVotedPercentage": "string"
    }
  }
  ```

### File Endpoints

#### Get Candidate Image
- **URL**: `/candidates/img/:filename`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: Image file

#### List All Images
- **URL**: `/candidates/img/list`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: 
  ```json
  [
    {
      "filename": "string",
      "url": "string"
    }
  ]
  ```

## Authentication

The application uses two authentication strategies:

### JWT Authentication
- JSON Web Tokens for standard user authentication
- Tokens stored in HTTP-only cookies
- 1-hour expiration time

### Clerk Authentication (Alternative)
- Third-party authentication service
- Token verification through Clerk SDK
- Used for certain admin operations (configurable)

To switch between authentication strategies, modify the `authStrategy` property in the request. The default strategy is JWT.
