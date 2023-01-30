// import client module
const { client } = require('../models');
// import faker.js to create random database later
const { faker } = require('@faker-js/faker');

const clientData = [
    {
        username: "Alex",
        email: "AlexDarling@gmail.com",
        password: "Qwer113",
    },
    {
        username: "Michael",
        email: "michael@gmail.com",
        password: "ssaP4567",
    },
    {
        username: faker.name.firstName('male'),
        email: faker.internet.email(),
        password: faker.datatype.string(6),
    },
    {
        username: faker.name.firstName('female'),
        email: faker.internet.email(),
        password: faker.datatype.string(8),
    },
    {
        username: faker.name.firstName('female'),
        email: faker.internet.email(),
        password: faker.datatype.string(9),
    },
    {
        username: faker.name.firstName('male'),
        email: faker.internet.email(),
        password: faker.datatype.string(10),
    },
]

const seedClient = () => client.bulkCreate(clientData);

module.exports = seedClient;