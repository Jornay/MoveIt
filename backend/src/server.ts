import express, { Request,Response } from 'express';
const app = express();

app.get("/" , (Request, Response))

app.listen(3334, () => console.log("Server is running!"));