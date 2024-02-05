import express, { Express, Request, Response } from "express";
import v1Router from "./v1/routes";

const app:Express = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req:Request, res:Response) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 

app.use("/api/v1", v1Router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});