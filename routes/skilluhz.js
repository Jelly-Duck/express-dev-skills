var express = require("express");
var router = express.Router();

var skillsCtrl = require("../controllers/skilzzz");

/* GET users listing. */

// All actual paths start with '/skilluhz.

router.get("/", skillsCtrl.index);

router.get("/:id", skillsCtrl.show);

module.exports = router;
