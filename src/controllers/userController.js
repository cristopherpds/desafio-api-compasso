import users from '../models/User.js';

class UserController {

  static listUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users);
    }).select("-password");
  }

  static listUserById = (req, res) => {
    const { id } = req.params;

    users.findById(id, (err, users) => {
      !err ? res.status(200).send(users) : res.status(404).send({ message: `${err.message} - id nao encontrado!` })
    }).select("-password");
  }

  static listUserByName = (req, res) => {
    const {name} = req.query;

    users.find({ 'name': { $regex: name } }, {}, (err, users) => {
      if (usuarios.length == 0 || err) {
        res.status(404).send({ message: "Usuario nao encontrado." });
      } else {
        res.status(200).send(users);
      }
    }).select("-password");

  }


  static createUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
      console.log(err);
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao registrar usuario` })
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  }

  static updateUser = (req, res) => {
    const { id } = req.params;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      err ? res.status(500).send({ message: err.message }) : res.status(200).send('Usuario actualizado com sucesso')
    });
  }

  static deleteUser = (req, res) => {
    const { id } = req.params;
    users.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message })
      } else {
        res.status(200).send({ message: 'Usuario removido com sucesso!' })
      }
    });

  }
}

export default UserController;