const router = require('express').Router();
const categoryRoutes = require('./categoriesRoutes');
const userRoutes = require('./userRoutes');
//const productRoutes = require('./product')

//router.use('/product', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);

module.exports = router;