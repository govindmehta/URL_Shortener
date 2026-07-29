import express from "express";
import connectDB from "./config/db";

const server = express();

connectDB();

server.get("/health", (req, res) => {
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
})