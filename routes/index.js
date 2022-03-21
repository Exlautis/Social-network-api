const router =  require('express').Router();

//import all api from api/index.js
const apiRoutes = require('./api');

// add prefix of all /api to all of the api routes 
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
