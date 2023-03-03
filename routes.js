var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(404).json({});
});

module.exports = router;
