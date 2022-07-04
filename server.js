const express = require("express");
const fs = require("fs");
// const notes = require("./db/db.json");
const path = require("path");

//universally unique identifier file (UUID)
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//API routes
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

//Post to add new notes to the data base
app.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  newNotes.id = uuidv4();
  notes.push = newNotes;
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);

  //   Delete notes
  app.delete("api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const deleteNote = notes.filter(
      (removeNote) => removeNote.id !== req.params.id
    );
    fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    res.json(removeNote);
  });
});
//HTML calls for index page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
//call notes
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
// APP listening on PORT
app.listen(PORT, () => {
  console.log(`API server now on port:${PORT}!`);
});
