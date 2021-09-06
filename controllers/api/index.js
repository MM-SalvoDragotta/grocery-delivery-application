const router = require('express').Router();
const categoryRoutes = require('./categoriesRoutes');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes')

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);

module.exports = router;