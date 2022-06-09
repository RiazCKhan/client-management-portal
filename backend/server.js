const express = require('express');
const cors = require('cors');

require('dotenv').config();

// Express Server Config
const app = express();
const port = process.env.PORT || 8001;

// Middleware Config
app.use(cors());
app.use(express.json());

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
