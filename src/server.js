require('dotenv').config();
const app = require('./app');
const http = require('http');
const { setupSocketIO } = require('./socket');
const pingRouter = require('./routes/ping');

app.use(pingRouter);

const server = http.createServer(app);

setupSocketIO(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const { smartDeviceDataCronJob } = require('./jobs/smartDeviceDataCron');

smartDeviceDataCronJob.start();
