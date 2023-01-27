const sequelize = require('../config/connection');
const seedCoffee = require('./coffeeData');
const seedBakery = require('./bakeryData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCoffee();

    await seedBakery();

    process.exit(0);
};

seedAll();