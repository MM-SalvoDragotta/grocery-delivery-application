const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');
const upload = require ('../../utils/uploadImage')
const fs = require("fs");
  
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
    const matched = req.body.file64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const fileType = matched[1].replace("image/", "");
    const base64 = matched[2];        
    const image_url_dot = `./public/images/${Date.now()}.${fileType}`;
    const image_url = `/images/${Date.now()}.${fileType}`;
    // const image_url = image_url_dot.substring(1)

    fs.writeFile(image_url_dot , base64, 'base64', function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("File Uploaded");
      }          
    });

    // delete req.body.file64;

      const newProduct = await Product.create({
          ...req.body, image_url
      });
      if (!newProduct) {
          res.status(404).json(
            { message: `Add body to request` }
          );
          return;
        }
        res.status(200).json(newProduct);
  } catch (err) {
        console.log(err.message);
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

  // router.post ('/upload' , withAuth, upload.single("product-file") , async (req, res) => {
  //   try {
  //   await console.log(JSON.stringify(req.file))
  //   var response = '<a href="/">Home</a><br>'
  //   response += "Files uploaded successfully.<br>"
  //   response += `<img src="${req.file.path}" /><br>`
  //   return res.send(response)
    
  //   res.status(200).json(product);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  // });
  
  module.exports = router;