import dotenv from 'dotenv';
import connectDB from '../config/dbConnection.config';
import adminSeed from './adminSeed';
dotenv.comfig();


const Seed = ()=>{
try {
    connectDB();

    await adminSeed();
   await userSeed();
    //call the function which we need to seed
} catch (error) {
    console.log(error.message);
    process.exit(1);
}

};

Seed();