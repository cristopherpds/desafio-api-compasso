import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n3aeyjh.mongodb.net/desafio-api-compasso`);

let db = mongoose.connection;

export default db;