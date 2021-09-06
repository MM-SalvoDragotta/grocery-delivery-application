const router = require('express').Router();
const { Product , Category} = require('../../models');
const withAuth = require('../../utils/auth');

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
      res.status(200).json(products);
      res.render('homepage', { 
        products, 
        logged_in: req.session.logged_in 
      });

    } catch (err) {
      res.status(500).json(err);
    }
  });

// get one product
router.get('/:id', withAuth, async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category
    try {
      const productByID = await Product.findByPk(req.params.id, {
        include: [
          { model: Category }          
        ],
      });
      if (!productByID) {
        res.status(404).json(
          { message: `No Product with id ${req.params.id} found!` }
        );
        return;
      }
      res.status(200).json(productByID);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // create new product
  router.post('/', withAuth, async (req, res) => {
    /* req.body should look like this...
      {
        name: "Bread",
        price: 20,
        stock: 5,
        isSpecial: 0,
        category_id: [1]
      }
    */
   try {    
        const newProduct = await Product.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        if (!newProduct) {
            res.status(404).json(
              { message: `Add body to request` }
            );
            return;
          }
          res.status(200).json(newProduct);
        } catch (err) {
          res.status(500).json(err);
        }
      });
  
  // update product
  router.put('/:id', withAuth, async (req, res) => {
    // update product data
    try {
      const product = await Product.update(req.body, {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
        if (!product) {
          res.status(400).json(
            {message: `Product could no be updated`}
          );
          return;
        }
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
  }
});     

router.delete('/:id', withAuth, async (req, res) => {
    // delete one product by its `id` value
    try {
      const product = await Product.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!product) {
        res.status(400).json(
          { message: `No Product with id ${req.params.id} found!` }
        );
        return;
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;