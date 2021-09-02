const router = require('express').Router();
const { Product, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

router.get('/', async (req, res) => {
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
    res.render('', { 
      categories,
      logged_in: req.session.logged_in, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
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

    res.render('', { 
      category, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('product/:id', withAuth , async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id,{});

    const product = productData.get({ plain: true });

    res.render('', { 
      product, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;