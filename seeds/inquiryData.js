// import client module
const { inquiry } = require('../models');
// import faker.js to create random database later
const { faker } = require('@faker-js/faker');

const inquiryData = [
    {
        clientEmail: faker.internet.email(),
        message: "Could you please provide sandwitch options, so I can grab my lunch here?"
    }
]

const seedInquiry = () => inquiry.bulkCreate(inquiryData);

module.exports = seedInquiry;