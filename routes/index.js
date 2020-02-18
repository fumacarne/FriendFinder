var router = require('express').Router();

router.use('/api', require('./api/people'));

module.exports = router;