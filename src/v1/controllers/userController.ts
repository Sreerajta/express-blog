import { Request, Response } from "express";
import { Database, Statement } from 'sqlite3';
class userController {
  constructor() {}
  public getAllUsers = (req:Request, res:Response) => {
    res.send("Get all Users");
  };
  
  public getOneUser = (req:Request, res:Response) => {
    res.send("Get an existing user");
  };
  
  public createNewUser = (req:Request, res:Response) => {
    res.send("Create a new user");
  };
  
  public updateOneUser = (req:Request, res:Response) => {
    res.send("Update an existing user");
  };
  
  public deleteOneUser = (req:Request, res:Response) => {
    res.send("Delete an existing user");
  };

}
 export default userController;