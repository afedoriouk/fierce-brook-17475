const path = require("path");
const router = require("express").Router();

//notes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
//index
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
module.exports = router;
