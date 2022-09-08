import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {type: String},
    cpf:{type: String},
    birthDate: {type: String},
    email: {type: String},
    password: {type: String},
    address: {type: String},
    number: {type: String},
    complement: {type: String},
    city:{type: String},
    state: {type: String},
    country: {type: String},
    zipCode: {type: String},
  }
);

const users = mongoose.model('users', userSchema);

export default users;