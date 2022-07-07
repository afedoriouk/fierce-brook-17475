const $noteTitle = $("note-title");
const $noteTextContainer = $(".note-text-container");
const $saveNoteButton = $(".saveNoteButton");
const $newNoteButton = $(".newNoteButton");
const $noteList = $(".noteList .list-group");

// activeNote is used to keep track of the note in the textarea

let activeNote = {};

//example
// $("button").click(function () {
//   $.getJSON("demo_ajax_json.js", function (result) {
//     $.each(result, function (i, field) {
//       $("div").append(field + " ");
//     });
//   });
// });
//

//function to get all note from the Database
const getNotes = function () {
  return $.ajax({
    url: "/api/notes",
    method: "GET",
    // headers: { "Content-Type": "application/json",
  });
};

//load notes example google search
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
///////////

////save notes example ggogle search

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//

// add notes example google search
const addNote = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title,
    body,
  });
  saveNotes(notes);
};

// if (window.location.pathname === "/notes") {
//   noteTitle = document.querySelector(".note-title");
//   noteText = document.querySelector(".note-textarea");
//   saveNoteBtn = document.querySelector(".save-note");
//   newNoteBtn = document.querySelector(".new-note");
//   noteList = document.querySelectorAll(".list-container .list-group");
// }

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

//If the note is active - display the note. If note is not active - display empty input

const renderActiveNote = function () {
  $saveNoteBtn.hide();

  if (activeNote.id) {
    $noteTitle.Attribute("readonly", true);
    $noteText.Attribute("readonly", true);
    $noteTitle.value(activeNote.title);
    $noteText.value(activeNote.text);
  } else {
    $noteTitle.Attribute("readonly", false);
    $noteText.Attribute("readonly", false);
    $noteTitle.value = "";
    $noteText.value = "";
  }
};

const handleNoteSave = function () {
  const newNote = {
    title: $noteTitle.value,
    text: $noteText.value,
  };
  saveNote(newNote).then(function (data) {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
const handleNoteDelete = function (event) {
  // Prevents the click listener when the button is clicked
  event.stopPropagation();

  const note = e.target;
  const noteId = JSON.parse(note.parentElement.getAttribute("data-note")).id;

  if (activeNote.id === noteId) {
    activeNote = {};
  }

  deleteNote(noteId).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
  e.preventDefault();
  activeNote = JSON.parse(e.target.parentElement.getAttribute("data-note"));
  renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
  activeNote = {};
  renderActiveNote();
};

const handleRenderSaveBtn = () => {
  if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteBtn);
  } else {
    show(saveNoteBtn);
  }
};

// Render the list of note titles
const renderNoteList = async (notes) => {
  let jsonNotes = await notes.json();
  if (window.location.pathname === "/notes") {
    noteList.forEach((el) => (el.innerHTML = ""));
  }

  let noteListItems = [];

  // Returns HTML element with or without a delete button
  const createLi = (text, delBtn = true) => {
    const liEl = document.createElement("li");
    liEl.classList.add("list-group-item");

    const spanEl = document.createElement("span");
    spanEl.classList.add("list-item-title");
    spanEl.innerText = text;
    spanEl.addEventListener("click", handleNoteView);

    liEl.append(spanEl);

    if (delBtn) {
      const delBtnEl = document.createElement("i");
      delBtnEl.classList.add(
        "fas",
        "fa-trash-alt",
        "float-right",
        "text-danger",
        "delete-note"
      );
      delBtnEl.addEventListener("click", handleNoteDelete);

      liEl.append(delBtnEl);
    }

    return liEl;
  };

  if (jsonNotes.notes.length === 0) {
    noteListItems.push(createLi("No saved Notes", false));
  }
  console.log(jsonNotes);

  await jsonNotes.notes.forEach((note) => {
    const li = createLi(note.title);
    li.dataset.note = JSON.stringify(note);

    noteListItems.push(li);
  });

  if (window.location.pathname === "/notes") {
    noteListItems.forEach((note) => noteList[0].append(note));
  }
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => getNotes().then(renderNoteList);

if (window.location.pathname === "/notes") {
  saveNoteBtn.addEventListener("click", handleNoteSave);
  newNoteBtn.addEventListener("click", handleNewNoteView);
  noteTitle.addEventListener("keyup", handleRenderSaveBtn);
  noteText.addEventListener("keyup", handleRenderSaveBtn);
}

getAndRenderNotes();
