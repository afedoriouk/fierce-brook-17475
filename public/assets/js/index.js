
//

const { json } = require("express");

const noteTitle = ("note-title");
const noteTextContainer = (".note-text-container");
const saveNoteButton = (".saveNoteButton");
const newNoteButton = (".newNoteButton");
const noteList = (".noteList .list-group");

// activeNote is used to keep track of the note in the textarea

let activeNote = {};


// .click(function () {
// .getJSON("ajax_json.js", function (result) {
// .each(result, function (i, field) {
// ("div").append(field + " ");


//function to get all note from the Database
const getNotes = function (title,body) {
  return ({
    url: "/notes",
    method: "GET",
    
  });
};

//load notes on the page
const loadNotes = function () {
  try {
    const dataBuffer =  fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.stringify();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//save notes 

const saveNotes = function (note) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};


// add notes //
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes=notes.filter(function(note){
    return note.title === title
  })
  if(duplicateNotes.lenght===0)
  notes.push({
    title:title,
    body:body,
  });
  saveNotes(notes);
  console.log("New Note")

};

if (window.location.pathname === "/notes") {
  noteTitle = document.querySelector(".note-title");
  noteTextContainer = document.querySelector(".note-textarea");
  saveNoteButton = document.querySelector(".save-note");
  newNoteButton = document.querySelector(".new-note");
  noteList = document.querySelectorAll(".list-container .list-group");
}

// Show an element
const show = (elem) => {
  elem.style.display = "inline";
};

// Hide an element
const hide = (elem) => {
  elem.style.display = "none";
};

const saveNote = (note) =>
  fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

//If the note is active - display the note. 
//If note is not active - display empty container

const renderActiveNote = function () {
  hide(saveNoteButton);

  if (activeNote.id) {
    noteTitle.setAttribute("readonly", true);
    noteText.setAttribute("readonly", true);
    noteTitle.value=activeNote.title;
    noteText.value=activeNote.text;
  } else {
    noteTitle.removeAttribute("readonly", false);
    noteText.removeAttribute("readonly", false);
    noteTitle.value = "";
    noteText.value = "";
  }
};

//Save the note to the Database after getting and rendering the note
const handleNoteSave = function (notes) {
  const newNote = {
    title: $noteTitle.value(),
    text: $noteText.value(),
  };
  saveNote(newNote).then(function (data) {
    getAndDisplayNotes();
    renderCurrentNote();
  });
};

// Delete the clicked note
const handleNoteDelete = function (event) {   // Prevents the click listener when the button is clicked
  
  event.stopPropagation();

  const note = $(this).data().parent(".list-group-item");

  if (activeNote.id === note.id) {
    activeNote = {};
  }

  deleteNote(note.id).then(function () {
    getAndDisplayNotes();
    displayCurrentNote();
  });
};

// Sets the current Note and displays it
const handleCurrentNoteView = function () {
  currentNote = {};
activeNote = json.parse(element.target.parentElement.getAttribute)
  displayCurrentNote();
};

// Sets the active Note to and empty object and allows the user to enter a new note
const handleNewNoteView = function () {
  newNote = {};
  displayNewNote();
};


//Hide save button if text containe empty // show save button if text is in the container
const handleDisplaySaveBtn = () => {
  if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteButton);
  } else {
    show($saveNoteButton);
  }
};



// Returns HTML element with or without a delete button
// Render the list of note titles

const displayNoteListItems = function (notes) {
  $noteList.empty();

  let noteListItems = [];
for (let i=0; i< notes.length; i++){
  const note = notes[i];
  const $li = ('list-group-item').data(note);
  const $deleteButton =('delete-note');

  $li.append($span, $deleteButton);
noteListItems.push($li)
}

  
};
//


// Gets notes from the db and renders them to the sidebar
const getAndDisplayNotes = function () {

  return getNotes().then(function(data){
    displayNoteList(data);
})
};

if (window.location.pathname === "/notes") {

  saveNoteButton.addEventListener("click", handleNoteSave);
  newNoteButton.addEventListener("click", handleNewNoteView);
  noteTitle.addEventListener("keyup", handleDisplaySaveButton);
  noteText.addEventListener("keyup", handleDisplaySaveButton);
};

getAndDisplayNotes();
// module.exports = {getNotes:getNotes, addNote:addNote, saveNote:saveNote, deleteNote:deleteNote}