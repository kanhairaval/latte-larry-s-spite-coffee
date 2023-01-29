// import client module
const { client } = require('../models');
// import faker.js to create random database later
const { faker } = require('@faker-js/faker');

const clientData = [
    {
        Username: faker.name.firstName('female'),
        Email: faker.internet.email(),
        password: faker.datatype.string(10),
    },
    {
        Username: faker.name.firstName('male'),
        Email: faker.internet.email(),
        password: faker.datatype.string(12),
    },
    {
        Username: faker.name.firstName('female'),
        Email: faker.internet.email(),
        password: faker.datatype.string(8),
    },
]

const seedClient = () => client.bulkCreate(clientData);

module.exports = seedClient;