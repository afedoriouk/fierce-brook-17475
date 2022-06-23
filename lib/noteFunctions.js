const fs = require("fs");
const path = require("path");
//create new note
function noteCreateNew(body, noteTakerArray) {
    const note = body;
    noteTakerArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteTakerArray
        }, null, 2)
    )
    return note

};
//delete note
function noteDeleteNote(noteTakerArray, id) {
    let deleteID = parceInt(id);
    noteTakerArray.splice(deleteID, 1);

    // loop to rewrite index for the notes that remain
    for (let i = deleteID; i < noteTakerArray.lenght; i++) {
        noteTakerArray[i].id = i.toString();
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteTakerArray
        }, null, 2)
    )
}
module.exports = {
    noteCreteNew,
    noteDeleteNote
};