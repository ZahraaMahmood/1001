import express, { Request, Response } from "express";

import app from "./app";

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello 1001!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
