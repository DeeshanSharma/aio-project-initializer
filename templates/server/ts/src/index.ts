import express from 'express';
import connectDB from './config/db';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/', routes);

connectDB();

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(PORT, () =>
  console.log(`⚡️[SERVER]: Server is running at http://localhost:${PORT}`)
);
