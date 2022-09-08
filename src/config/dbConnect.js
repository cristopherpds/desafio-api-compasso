import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cristopherpds:root@cluster0.n3aeyjh.mongodb.net/desafio-api-compasso");

let db = mongoose.connection;

export default db;