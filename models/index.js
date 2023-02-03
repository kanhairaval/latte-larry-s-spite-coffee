// import models
const coffee = require('./coffee');
const bakery = require('./bakery');
const client = require('./client');
const Inquiry = require('./inquiry');

// one clients have many inquiries
client.hasMany(Inquiry,{
    foreignKey: 'client_id',
});

// inquiry belongs to client
Inquiry.belongsTo(client, {
    foreignKey: 'client_id',
});

module.exports = {client, Inquiry, coffee, bakery};
