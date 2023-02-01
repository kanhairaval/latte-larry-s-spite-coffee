// import sequelize and models
const sequelize = require('../config/connection');
const { client, Inquiry } = require('../models');

// import data
const seedCoffee = require('./coffeeData');
const seedBakery = require('./bakeryData');
const clientData = require('./clientData');
const inquiryData = require('./inquiryData');

// seedall
const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCoffee();

    await seedBakery();

    const Clients = await client.bulkCreate(clientData, {
        individualHooks: true,
        returning: true,    
    });

    for (const inquiry of inquiryData){
        await Inquiry.create({
            ...inquiry,
            client_id: Clients[Math.floor(Math.random()*Clients.length)].id,
        });
    };

    process.exit(0);
};

seedAll();