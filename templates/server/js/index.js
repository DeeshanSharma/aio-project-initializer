const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/', routes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`⚡️[SERVER]: Server is running at http://localhost:${PORT}`)
);
