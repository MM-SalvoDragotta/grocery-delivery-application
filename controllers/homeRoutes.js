const router = require('express').Router();
const { Product, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['category_name'],
        },
      ],
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('homepage', { 
      products, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/category', async (req, res) => {
  try {
    const cateData = await Category.findAll({});
    const productData = await Product.findAll({});
    
    const categories = cateData.map((cate) => cate.get({ plain: true }));
    const products = productData.map((pro) => pro.get({ plain: true }));

    res.render('allproduct', { 
      categories,
      products,
      logged_in: req.session.logged_in, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const cateData = await Category.findAll({});

    const onecateData = await Category.findByPk(req.params.id,{
      include: [
        {
          model: Product,
        },
      ],
    });

    const categories = cateData.map((cate) => cate.get({ plain: true }));
    const onecategory = onecateData.get({ plain: true });

    res.render('onecategory', { 
      ...onecategory,
      categories, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/product/:id',withAuth , async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id,{
      include:{
        model: Category
      }
    });

    const cateData = await Category.findAll();

    const product = productData.get({ plain: true });
    const categories = cateData.map((cate) => cate.get({ plain: true }));

    res.render('product', { 
      ...product,
      categories, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
