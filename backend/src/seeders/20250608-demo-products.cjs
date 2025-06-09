'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Smartphone',
        description: 'Latest model smartphone with high-end specs.',
        price: 70000,
        discountPrice: 65000,
        image: 'https://via.placeholder.com/300x200?text=Smartphone',
        categoryId: 1, // Electronics
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Casual T-Shirt',
        description: 'Soft cotton T-shirt, perfect for daily wear.',
        price: 1000,
        discountPrice: 799,
        image: 'https://via.placeholder.com/300x200?text=T-Shirt',
        categoryId: 2, // Clothing
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mystery Novel',
        description: 'A thrilling mystery novel to keep you hooked.',
        price: 600,
        discountPrice: 499,
        image: 'https://via.placeholder.com/300x200?text=Book',
        categoryId: 3, // Books
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kids Toy Car',
        description: 'Battery-powered toy car for kids.',
        price: 1500,
        discountPrice: 1200,
        image: 'https://via.placeholder.com/300x200?text=Toy+Car',
        categoryId: 4, // Toys
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wooden Chair',
        description: 'Comfortable wooden chair for your living room.',
        price: 5000,
        discountPrice: 4500,
        image: 'https://via.placeholder.com/300x200?text=Wooden+Chair',
        categoryId: 5, // Furniture
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fitness Tracker',
        description: 'Track your daily activities with this fitness band.',
        price: 3000,
        discountPrice: 2700,
        image: 'https://via.placeholder.com/300x200?text=Fitness+Tracker',
        categoryId: 6, // Health or other category
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
