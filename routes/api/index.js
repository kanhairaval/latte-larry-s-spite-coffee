const router = require('express').Router();
const bakeryRoutes = require('./bakery-routes');
const clientRoutes = require('./client-routes');
const coffeeRoutes = require('./coffee-routes');
const inquiryRoutes = require('./inquiry-routes');

router.use('/bakery', bakeryRoutes);
router.use('/coffee', coffeeRoutes);
router.use('/client', clientRoutes);
router.use('/inquiry', inquiryRoutes);

module.exports = router;