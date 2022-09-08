import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      required: [true, 'O nome é obrigatorio']
    },
    cpf: { type: String, required: [true, 'O CPF é obrigatorio'],minlength: 11, maxlength: 11, validate: /^[0-9]*$/ },
    birthDate: { type: Date, required: [true, 'A data de nascimento é obrigatoria'], max: "09/09/2004" },
    email: { type: String, required: [true, 'O e-mail é obrigatorio'],match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'e-mail nao valido'] },
    password: { type: String, required: [true, 'A senha é obrigatorio'], minlength: 6 },
    address: { type: String, required: [true, 'O endereco é obrigatorio'] },
    number: { type: String, required: [true, 'O numero da porta e obrigatorio'] },
    complement: { type: String, required: [true, 'O complemento é obrigatorio'] },
    city: { type: String, required: [true, 'A cidade é obrigatorio'] },
    state: { type: String, required: [true, 'O estado é obrigatorio'] },
    country: { type: String, required: [true, 'O país é obrigatorio'] },
    zipCode: { type: String, required: [true, 'O CEP é obrigatorio'],validate: [/^[0-9]*$/, 'Prencher so com numeros'], minlength: 8, maxlength: 8 },
  }
);

const users = mongoose.model('users', userSchema);

export default users;