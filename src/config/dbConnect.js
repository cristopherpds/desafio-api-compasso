import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cristopherpds:root@cluster0.n3aeyjh.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;