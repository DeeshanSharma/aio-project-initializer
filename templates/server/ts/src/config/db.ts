import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('⚡[DATABASE]: Database connected successfully');
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
