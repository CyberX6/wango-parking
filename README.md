
# Wango Parking

Wango is a payment website that allows users to pay for on-street parking. Users can register, log in, start, and stop parking sessions. This project includes both the backend and frontend implementations.

## Project Structure

- `backend/`: Contains the Node.js and Express backend.
- `frontend/`: Contains the React frontend.

## Features

- User registration and login
- Start and stop parking sessions
- Dynamic pricing rules based on city and time
- Database seeding for initial data

## Technologies Used

- Backend: Node.js, Express, Sequelize, PostgreSQL, TypeScript
- Frontend: React, TypeScript, Axios, React Router
- Docker for containerization

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Yarn
- Docker and Docker Compose
- PostgreSQL

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/wango-parking.git
   cd wango-parking
   ```

2. **Set up environment variables:**

   Create a `.env` file in the `backend/` directory with the following content:

   ```env
   DB_HOST=your_db_host
   DB_NAME=wango
   DB_USER=your_db_user
   DB_PASS=your_db_password
   ```

3. **Install dependencies:**

   ```bash
   cd backend
   yarn install
   ```

4. **Run migrations and seeders:**

   ```bash
   yarn migrate
   npx sequelize-cli db:seed:all
   ```

5. **Start the backend server:**

   ```bash
   yarn dev
   ```

### Frontend Setup

1. **Install dependencies:**

   ```bash
   cd frontend
   yarn install
   ```

2. **Start the frontend server:**

   ```bash
   yarn start
   ```

### Docker Setup

1. **Build and run the Docker containers:**

   ```bash
   docker-compose up --build
   ```

2. **Access the application:**

   - Frontend: [http://localhost:3001](http://localhost:3001)
   - Backend: [http://localhost:3000](http://localhost:3000)

## Testing

To run tests, use the following command in the backend directory:

```bash
yarn test
```

## License

This project is licensed under the MIT License.
