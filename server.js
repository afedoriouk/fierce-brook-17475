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
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

//Post to add new notes to the database //Creating POST route
//Using input from json file to push new note to the database
// const { error } = require("console");
// import { readFileSync } from "fs";

app.post("/api/notes", function (req, res) {
  res.send();
});
const content = JSON.stringify(notes);
fs.readFileSync("./db/db.json", content, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log(err);
});
const notes = JSON.stringify(notes);
const newNoteID = notes.lenght + 1;
const newNote = {
  text: noteRequest.text,
  id: newNoteID,
  title: noteRequest.title,
};
notes.push(newNote);
res.json(newNote);
fs.writeFile("./db/db.json", content, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }
});

//Post method to add new notes to the data base
app.post("/api/notes", function (req, res) {
  res.send();
  const content = JSON.stringify(output);

  fs.readFileSync("./db/db.json", function (err) {
    if (err) {
      return console.log("New Note");
    }
  });
  const newNotes = req.body;
  newNotes.id = uuidv4();
  notes.push = newNotes;
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

// Delete notes with DELETE method //Delete the note form the database usig ID

app.delete("api/notes/:id", function (req, res) {
  
  const deleteID = req.params.id;
  fs.readFile("./db/db.json", "utf8", function (err) {
    if (err) {
      console.log(err);
    }
    const content = JSON.stringify(notes);
    if ((deleteID) => notes.length) {
      res.json(notes.splice(deleteID));
      let notes = [];

      for (let i = 0; i < notes.length; i++)
        notes[i].id === 0
          ? { indexes, [0]: i }
          : fs.readFileSync(
              "./db/db.json",
              JSON.stringify(notes, null),
              function (err) {
                if (err) console.log(err);
              }
            );
    } else {
      res.json(false);
    }
  });
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
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

// APP listening on PORT
app.listen(PORT, () => {
  console.log(`API server now on port:${PORT}!`);
});
