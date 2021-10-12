const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const bookController = require("../controllers/bookController");



router.get("/", catchErrors(bookController.getAllBooks));
// this api will get all the available books present in the database


router.post("/", catchErrors(bookController.addBook));
// this api will add the book

router.get("/book-search", catchErrors(bookController.getBook));
//this api is asked in the asssignment
//it will take isbn or key parameted from query, validate them and get results
//for addition key I added book type
//choose for now between thriller, comedy or romantic for developement purpose


module.exports = router;
