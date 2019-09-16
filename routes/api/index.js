const router = require('express').Router();

const categoryRouter = require('./categoryRouter-OPEN');

router.use(categoryRouter);

module.exports = router;