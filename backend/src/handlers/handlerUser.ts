import {Response , Request } from 'express';
import {createCurrentUser, getUserId, upDateUserControll} from '../controllers/userController';


export const handlerCreateUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const newUser = await createCurrentUser(user);
        if(newUser == "existe") return res.status(200).send("There is already a user with that registered email");

        res.status(201).json(newUser.toObject())

    } catch (error) {
         console.log(error);
            res.status(500).json({ message: "Error creating user" });
    }
}

export const handlerGetUser = async (req: Request, res:Response) => {
    try {
        const {userId} = req.params
        const response = await getUserId(userId);
        res.status(201).json(response.toObject())

    } catch (error) {
          console.log(error);
            res.status(500).json({ message: "Error find user" });
    }
}

export const handlerUpdateUser = async (req: Request, res: Response) => {
    try {
      const {_id,email, name, addresslineal, city } = req.body;
      
      const response = await upDateUserControll(_id, email, name, addresslineal, city)
        
      res.send(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error updating user" });
    }
  };
  
module.exports = { 
    handlerCreateUser,
    handlerGetUser,
    handlerUpdateUser
}