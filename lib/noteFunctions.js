const fs = require("fs");
const path = require("path");

//create new note
function createNewNote(body, notesArray) {
  const notes = body;
  notesArray.push(notes);

  //save notes array to db.json
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );
  return notes;
}
//find note by ID from array
function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

//remove note from note array

const index = 0;
notesArray.forEach((note) => {
  note.id = index;
  index += 1;
});

//delete note
function removeNote(notes, id) {
  const notesArray = notes.filter((el) => {
    if (el.id == id) {
      return false;
    } else {
      return true;
    }
  });

  //rewrite index for the notes that remain

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notesArray;
}
//edit existing note
function editNote(editedNote, notesArray) {
  const index = notesArray.findIndex((note) => note.id === editedNote.id);
  //replace old note with new revised note
  notesArray.splice(index, 1);
  notesArray.splice(index, 0, editedNote);

  //update db.json with updated note
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

module.exports = {
  createNewNote,
  findById,
  editNote,
  removeNote,
};
