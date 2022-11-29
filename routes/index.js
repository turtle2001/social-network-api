const router = require('express').Router();
//imports routes from index.js
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error. Wrong Route</h1>');
});

module.exports = router;
