const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Baby',
  },
  {
    category_name: 'Beer, Wine & Spirits',
  },
  {
    category_name: 'Beverages',
  },
  {
    category_name: 'Bread & Bakery',
  },
  {
    category_name: 'Breakfast & Cereal',
  },
  {
    category_name: 'Canned Goods & Soups',
  },
  {
    category_name: 'Condiments',
  },
  {
    category_name: 'Cookies, Snacks & Candy',
  },
  {
    category_name: 'Dairy, Eggs & Cheese',
  },
  {
    category_name: 'Deli & Signature Cafe',
  },
  {
    category_name: 'Flowers',
  },
  {
    category_name: 'Frozen Foods',
  },
  {
    category_name: 'Produce: Fruits & Vegetables',
  },
  {
    category_name: 'Grains: Pastas & Sides',
  },
  {
    category_name: 'International Cuisine',
  },
  {
    category_name: 'Meat & Seafood',
  },
  {
    category_name: 'Miscellaneous: Gifts',
  },
  {
    category_name: 'Paper Products',
  },
  {
    category_name: 'Cleaning Supplies',
  },
  {
    category_name: 'Health & Beauty',
  },
  {
    category_name: 'Pet Care',
  },
  {
    category_name: 'Pharmacy',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;