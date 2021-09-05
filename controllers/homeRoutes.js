const router = require('express').Router();
const { Product, Category , User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const productData = await Product.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
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
    const cateData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: [
            'name',
            'price',
            'stock',
            'isSpecial',
          ],
        },
      ],
    });
    
    const categories = cateData.map((cate) => cate.get({ plain: true }));

    res.status(200).json(categories);
    // res.render('', { 
    //   categories,
    //   logged_in: req.session.logged_in, 
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const cateData = await Category.findByPk(req.params.id,{
      include: [
        {
          model: Product,
          attributes: [
            'name',
            'price',
            'stock',
            'isSpecial',
          ],
        },
      ],
    });

    const category = cateData.get({ plain: true });

    res.status(200).json(category);
    // res.render('', { 
    //   category, 
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id,{});

    const product = productData.get({ plain: true });
  
    res.status(200).json(product);
    // res.render('', { 
    //   product, 
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
