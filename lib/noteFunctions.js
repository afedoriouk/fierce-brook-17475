const fs = require("fs");
const path = require("path");

//create new note
function createNewNote(note, notesArray) {
  const note = note;
  notesArray.push(note);

  //save notes array to db.json
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );
  return note;
}
//find note by ID from array
const findById = (id, notesArray) => {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
};

//edit existing note

const editNote = (editedNote, notesArray) => {
  const index = notesArray.findIndex((note) => note.id === editedNote.id);
  //replace old note with new revised note
  notesArray.splice(index, 1);
  notesArray.splice(index, 0, editedNote);

  //update db.json with updated note
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};
//delete note
const removeNote = (note, notesArray) => {
  //remove note from note array
  const index = notesArray.indexList(note);
  notesArray.splice(index, 1);

  //rewrite index for the notes that remain

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );
};
module.exports = {
  createNewNote,
  findById,
  editNote,
  removeNote,
};
