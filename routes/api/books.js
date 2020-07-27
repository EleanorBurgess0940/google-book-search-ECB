const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/reactreadinglist"
router.route("/").get(booksController.findAll).post(booksController.create);

router.post("/", (req, res) => {
  console.log(req, res);
  console.log("im here");
});

// Matches with "/api/reactreadinglist/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
