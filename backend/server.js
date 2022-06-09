const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Express Server Config
const app = express();
const port = process.env.PORT || 8001;

// Middleware Config
app.use(cors());
app.use(express.json());

// Mongoose Config
const uri = process.env.ATLUS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const clientsRouter = require('./routes/clients');
const adminsRouter = require('./routes/admins');
const therapistsRouter = require('./routes/therapists');

app.use('/clients', clientsRouter);
app.use('/admins', adminsRouter);
app.use('/therapists', therapistsRouter);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
