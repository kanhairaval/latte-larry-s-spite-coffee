// import client module
const { client } = require('../models');
// import faker.js to create random database later
const { faker } = require('@faker-js/faker');

const clientData = [
    {
        username: faker.name.firstName('female'),
        email: faker.internet.email(),
        password: faker.datatype.string(10),
    },
    {
        username: faker.name.firstName('male'),
        email: faker.internet.email(),
        password: faker.datatype.string(12),
    },
    {
        username: faker.name.firstName('female'),
        email: faker.internet.email(),
        password: faker.datatype.string(8),
    },
]

const seedClient = () => client.bulkCreate(clientData);

module.exports = seedClient;