import users from '../models/User.js';

class UserController{
  
  static listUsers = (req, res) =>{
    users.find((err, users)=>{
      res.status(200).json(users);
    }).select("-password");
  }

  static createUser = (req, res) =>{
    let user = new users(req.body);
    user.save((err)=>{
      console.log(err);
      if(err){
        res.status(500).send({message: `${err.message} - falha ao registrar usuario`})
      }else{
        res.status(201).send(user.toJSON());
      }
    });
  }


}

export default UserController;