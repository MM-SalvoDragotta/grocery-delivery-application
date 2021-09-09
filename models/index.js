const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
//const Order = require('./order');
//const ProductOrder = require('./productorder');


// Order.belongsTo(User,{
//   foreignKey: 'user_id'
// });

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product.belongsToMany(Order, {
//   through: {
//     model: ProductOrder,
//     unique: false
//   },
// });

// Order.belongsToMany(Product, {
//   through: {
//     model: ProductOrder,
//     unique: false
//   },
// });

module.exports = {
  Product,
  Category,
 // Order,
  User,
  //ProductOrder
};
