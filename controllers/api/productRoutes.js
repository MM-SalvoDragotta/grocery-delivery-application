const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');
  
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
  router.put('/:id', withAuth , async (req, res) => {
    // update product data
    try {
      const product = await Product.update(req.body, {
          where: {
            id: req.params.id,
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