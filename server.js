//Dependencies for express

const express = require("express");
const fs = require("fs");
// const notes = require("./db/db.json");
const path = require("path");

//universally unique identifier file (UUID)
const { v4: uuidv4 } = require("uuid");

//Creating express App // localhost:3001
const PORT = process.env.PORT || 3001;
const app = express();

//use url for static HTML page
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Creating API routes //GET routes method
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});


//HTML call routing user to the  index page //GET routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//GET route call notes //routing users to the notes HTML page
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//GET routes using database JSON file
// app.get("/notes", function (req, res) {
//   res.sendFile(path.join(__dirname, "./db/db.json"));
// });

// APP listening on PORT
app.listen(PORT, () => {
  console.log(`API server now on port:${PORT}!`);
});


//express -npm install express