# Status Check

## Overview

Contains the backend server and API.

## API

/register
POST: Returns the user's upon registration.

/login
POST: Returns the user's login info and JWT decoded token

/accounts
GET: Returns the user's information based on session id

/monitor
GET: Returns user's monitor information

### Backend Installation

1. Clone the repository:

```bash
git  clone  https://github.com/Senfia/Status-Check.git

1.  Navigate  to  the  project  directory:
cd  server

2.  Install  dependencies:
npm  install

3.  Set  up  the  MongoDB  database.  Update  the  MongoDB  connection  string  in  .env:
MONGO_URI=mongodb://localhost:27017/your-database-name

4.  Start  the  development  server:
npm  run  dev
```

### Backend Technologies:

- Node.js
- Express
- MongoDB
- Mongoose
- Axios
