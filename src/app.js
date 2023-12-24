const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const userRoutes = require('./routes/users');
const deviceEventsRouter = require('./routes/deviceEvents');

app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.error('Error connecting to the database', err);
    } else {
        console.log('Connected to the Database Successfully');
    }
});

app.use(passport.initialize());

app.use('/api/users', userRoutes);
app.use('/api/devices', deviceEventsRouter);

const devicePreferencesRouter = require('./routes/devicePreferences');
app.use('/api', devicePreferencesRouter);

module.exports = app;
