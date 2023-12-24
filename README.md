# DeltaHome

DeltaHome is a Software as a Service (SaaS) application that integrates with smart home and Internet of Things (IoT) devices using artificial intelligence technologies. It is designed for periodic data processing and managing user preferences for smart device operations.

## Features

- Integration with various smart home and IoT devices.
- AI-powered analysis using technologies like LLMs, GANs, and more.
- Periodic data processing over real-time updates to optimize performance.
- Customizable device operation configurations through a user interface.
- A secured and private user data handling.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- React
- Redux
- Socket.io
- Bootstrap
- HTML
- CSS3
- Axios
- Cron Jobs
- TensorFlow.js
- Chart.js
- Authentication with Passport
- Data security with bcrypt, dotenv, jsonwebtoken, helmet, and cors

## Current Project Structure

- package.json: Project metadata and dependencies.
- .gitignore: Specifies intentionally untracked files to ignore.
- src/server.js: Sets up the HTTP server and socket.io configuration.
- src/app.js: The core Express application setup and database connection.
- src/routes/: Directory containing route definitions.
- src/models/: Mongoose models for user and smart devices.
- src/config/passport.js: Passport strategies for authentication.
- src/socket.js: Socket.io setup and event handling.
- src/jobs/: Cron job for processing device data.
- src/services/: Services for data processing.

## Setup

To get started with DeltaHome, ensure that Node.js and MongoDB are installed on your system.

1. Clone the repository.
2. Install dependencies:
   ```shell
   npm install
   ```
3. Set up environment variables in `.env` file:
   - PORT: The port number for the server.
   - MONGODB_URI: The MongoDB connection string.
   - JWT_SECRET: Secret key for JWT authentication.

   **Note:** An example of a `.env` file content is given in the project details. Ensure to replace sensitive data with your own credentials.

4. To start the application, run:
   ```shell
   npm start
   ```

## API Endpoints

Here is a high-level overview of the current APIs:

- POST /api/users/register: Register a new user.
- POST /api/users/login: Authenticate a user and return a JWT.
- GET /api/users/profile: Get the authenticated user's profile.
- GET /api/:userId/devices: Retrieve a user's smart device preferences.
- PUT /api/:userId/devices/:deviceId: Update preferences for a user's smart device.
- POST /api/devices/update: Emit device updates to connected clients.
- GET /ping: Health check endpoint.

## Development

- Run the application in development mode:
  ```shell
  npm run dev
  ```

   This script would need to be defined in `package.json` if continuous development is anticipated.

## Contributing

Contributions are welcome! Please read the `CONTRIBUTING.md` file for guidelines on how to contribute to this project. (Note: You'll need to create this contributing guideline document.)

## License

DeltaHome is licensed under the ISC license. See the `LICENSE` file for more details. (Note: You'll need to add this license file.)

## Contact

If you have any questions, suggestions, or contributions, please contact the repository owner.