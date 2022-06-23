//routing end point response
const router = require("express").Router();
const { noteCreteNew } = require("../../lib/noteFunctions");
const {notes} = require('../..db/db');
const {noteCreateNew, noteDeleteNote} = require('../../lib/noteFunctions');

//save notes to json db
router.get('/notes', (req, res) =>{
    let saved = notes;
    res.json(saved);
});
router.post('notes', (req, res) => {
req.body.id = notes.lenght.toString();
let note = noteCreateNew(req.body, notes);
res.json(note);
});

router.delete('/notes/:id', (req,res)=>{
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
});
module.exports = router;