import { Request, Response } from "express";

const getAllUsers = (req:Request, res:Response) => {
    res.send("Get all Users");
  };
  
  const getOneUser = (req:Request, res:Response) => {
    res.send("Get an existing user");
  };
  
  const createNewUser = (req:Request, res:Response) => {
    res.send("Create a new user");
  };
  
  const updateOneUser = (req:Request, res:Response) => {
    res.send("Update an existing user");
  };
  
  const deleteOneUser = (req:Request, res:Response) => {
    res.send("Delete an existing user");
  };
  const userController = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
  }
 export default userController;