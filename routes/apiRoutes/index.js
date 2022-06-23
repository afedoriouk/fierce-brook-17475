//router parameters Express.js express.Router()
const router = reqire('expres').Router();
const notesRouters = require('./notesRouters');
//router use function
router.use(notesRouters);

//module.exports = router
module.exports = router;

//express -npm install express

