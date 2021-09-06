const { User } = require('../models');

const userData = [
    {
        "name": "Salvo",
        "email": "salvo@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Luke",
        "email": "luke@hotmail.com",
        "password": "password1234"
    }
]


const seedProducts = () => User.bulkCreate(userData,{
    individualHooks: true,
    returning: true,
  });

module.exports = seedProducts;