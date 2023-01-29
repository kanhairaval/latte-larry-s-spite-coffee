const sequelize = require('../config/connection');
const seedCoffee = require('./coffeeData');
const seedBakery = require('./bakeryData');
const seedClient = require('./clientData');
const seedInquiry = require('./inquiryData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCoffee();

    await seedBakery();

    await seedClient();

    await seedInquiry();

    process.exit(0);
};

seedAll();