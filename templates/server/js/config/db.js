const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('⚡[DATABASE]: Database connected successfully');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
