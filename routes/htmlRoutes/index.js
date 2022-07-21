const path = require("path");
const router = require("express").Router();

//router sends notes to notes HTML
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
//router for index HTML
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//export router
module.exports = router;
