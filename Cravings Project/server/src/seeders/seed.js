import dotenv from 'dotenv';
import connectDB from '../config/dbConnection.config.js';
import adminSeed from './adminSeed.js';
import userSeed from './userSeed.js';
dotenv.config();


const Seed = async () => {
  try {
    connectDB();

    await adminSeed();
    await userSeed();
    //Call The Function which we need to Seed.
  } catch (error) {
    console.log(error.message);
  }
  finally{
    process.exit(1);
  }
};

Seed();