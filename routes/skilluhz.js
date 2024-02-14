var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skillzzz');

/* GET users listing. */

// All actual paths start with '/skilluhz.

router.get('/', skillsCtrl.index);


module.exports = router;
