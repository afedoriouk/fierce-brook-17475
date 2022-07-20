//router parameters Express.js express.Router()
const router = reqire('expres').Router();
const notesRouters = require('./notesRouters');
//router use function
router.use(notesRouters);

//module.exports = router
module.exports = router;

//express -npm install express


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
    fs.readFile("./db/db.json", function (err) {
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
  module.exports=router;