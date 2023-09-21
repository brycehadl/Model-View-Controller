const router = require('express').Router();

const apiRoutes = require('./api').default;
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;