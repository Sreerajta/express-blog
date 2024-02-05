import express, { Express, Request, Response,Router } from "express";

const router:Router = express.Router();

router.get("/", (req:Request, res:Response) => {
  res.send("Get all users");
});

router.get("/:userId", (req:Request, res:Response) => {
  res.send("Get an existing user");
});

router.post("/", (req:Request, res:Response) => {
  res.send("Create a new user");
});

router.patch("/:userId", (req:Request, res:Response) => {
  res.send("Update an existing user");
});

router.delete("/:userId", (req:Request, res:Response) => {
  res.send("Delete an existing user");
});

export default router;