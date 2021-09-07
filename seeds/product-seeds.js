  
const { Product } = require('../models');

const productData = [
  {
    name: 'MasterFood BBQ Sauce',
    price: 2.99,
    stock: 14,
    category_id: 7,
  },
  {
    name: 'Bio-Oil Skincare',
    price: 14.99,
    stock: 25,
    category_id: 20,
  },
  {
    name: 'Nescafe Blend 43 Decaf',
    price: 8.99,
    stock: 12,
    category_id: 10,
  },
  {
    name: 'Provedore Antipasto Pack',
    price: 11.99,
    stock: 50,
    category_id: 14,
  },
  {
    name: 'Colgate Total Advanced Toothpaste',
    price: 3.99,
    stock: 12,
    category_id: 22,
  },
  {
    name: 'Twinings Tea Bags',
    price: 5.99,
    stock: 47,
    category_id: 10,
  },
  {
    name: 'Food for Health Mango & Coconut Probiotic Brekkie Balls',
    price: 11.99,
    stock: 44,
    category_id: 6,
  },
  {
    name: 'Head & Shoulders Shampoo or Conditioner',
    price: 8.99,
    stock: 87,
    category_id: 20,
  },
  {
    name: 'Cold Power Advanced Clean Laundry Liquid',
    price: 11.99,
    stock: 72,
    category_id: 19,
  },
  {
    name: 'Birds Eye Oven Bake Fish',
    price: 4.98,
    stock: 16,
    category_id: 12,
  },
  {
    name: 'Combram Estate Extra Virgin Olive Oil',
    price: 8.99,
    stock: 56,
    category_id: 7,
  },
  {
    name: 'Huggies Jumbo Nappies',
    price: 27.99,
    stock: 34,
    category_id: 1,
  },
  {
    name: 'Woodstock Bourbon & Cola 6 Pack',
    price: 23.99,
    stock: 40,
    category_id: 2,
  },
  {
    name: 'Pepsi 24 Pack',
    price: 15.99,
    stock: 28,
    category_id: 3,
    isSpecial: 1,
  },
  {
    name: 'Tip Top Raisin Bread',
    price: 2.99,
    stock: 76,
    category_id: 4,
  },
  {
    name: 'Old El Paso Mexican Burrito Tortillas',
    price: 2.99,
    stock: 56,
    category_id: 15,
  },
  {
    name: 'Saltwater Barramundi Fillets',
    price: 9.99,
    stock: 89,
    category_id: 16,
  },  {
    name: 'Giftwrap',
    price: 2.99,
    stock: 108,
    category_id: 17,
  },  {
    name: 'Bin Liner',
    price: 0.99,
    stock: 186,
    category_id: 19,
  },  {
    name: 'Glad Wrap',
    price: 2.99,
    stock: 94,
    category_id: 18,
  },  {
    name: 'Blackmores Vitamins',
    price: 17.99,
    stock: 48,
    category_id: 20,
    isSpecial: 1,
  },
  {
    name: 'Fussy Cat 4pk x12',
    price: 12.99,
    stock: 58,
    category_id: 21,
  },
  {
    name: 'Panadol',
    price: 2.99,
    stock: 76,
    category_id: 22,
  },
  {
    name: 'Pork Loins 2 pk',
    price: 11.99,
    stock: 70,
    category_id: 16,
    isSpecial: 1,
  },
  {
    name: 'Smiths BBQ Potatoe Chips',
    price: 2.99,
    stock: 54,
    category_id: 8,
  },
  {
    name: '12pk of Cage Free Eggs',
    price: 3.99,
    stock: 90,
    category_id: 9,
  },
  {
    name: 'Apples Bundle',
    price: 6.99,
    stock: 87,
    category_id: 13,
  },
  {
    name: 'White Tulips',
    price: 12.99,
    stock: 33,
    category_id: 11,
  },
  
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;