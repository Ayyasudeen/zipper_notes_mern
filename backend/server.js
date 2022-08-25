const express = require("express");
const notes = require("./data/notes");

const app = express();

app.listen(5000, console.log("Server Started on PORT 5000"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
