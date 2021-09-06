const router = require('express').Router();
const { Product, Category , User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['category_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
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

// router.get('/signup', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

router.get('/category', async (req, res) => {
  try {
    const cateData = await Category.findAll({});
    const productData = await Product.findAll({});
    
    const categories = cateData.map((cate) => cate.get({ plain: true }));
    const products = productData.map((pro) => pro.get({ plain: true }));

    console.log(categories)
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

    console.log(onecategory);
    res.render('onecategory', { 
      ...onecategory,
      categories, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id,{
      include:{
        model: Category
      }
    });

    const cateData = await Category.findAll();

    const product = productData.get({ plain: true });
    const categories = cateData.map((cate) => cate.get({ plain: true }));
    console.log(product);
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
