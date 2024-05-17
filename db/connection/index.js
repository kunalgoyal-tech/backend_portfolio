import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_CONNECTION_POOLSIZE, DATABASE_URL_DEV } = process.env;

const options = {
  maxPoolSize: MONGO_CONNECTION_POOLSIZE || 20,
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
};

const mongoose_connection = mongoose.createConnection(DATABASE_URL_DEV, options);

mongoose_connection.on('error', (error) => {
  console.error(`error on ${DATABASE_URL_DEV} Error \n${error.message}`);
  throw new Error(error.message);  // Proper error throwing
});

mongoose_connection.on('connecting', () => {
  console.info(`connecting -> ${DATABASE_URL_DEV}`);
});

mongoose_connection.on('uninitialized', () => {
  console.info(`uninitialized -> ${DATABASE_URL_DEV}`);
});

mongoose_connection.on('connected', () => {
  console.info(`connected to  -> ${DATABASE_URL_DEV}`);
});

mongoose_connection.on('disconnected', () => {
  console.error(`disconnected -> ${DATABASE_URL_DEV}`);
});

export default mongoose_connection;
