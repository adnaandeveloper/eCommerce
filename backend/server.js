import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

connectDb();

const app = express();
app.use(express.json()); //json data in the boddy  noo ogolaan

app.get('/', (req, res) => {
  res.send('API is running !');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/order', orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
