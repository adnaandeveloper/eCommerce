import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDb();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running !');
});

app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
