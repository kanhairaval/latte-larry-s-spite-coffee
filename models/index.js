// import models
const coffee = require('./coffee');
const bakery = require('./bakery');
const client = require('./client');
const inquiry = require('./inquiry');

// one clients have many inquiries
client.hasMany(inquiry,{
    foreignKey: 'client_id',
});

// inquiry belongs to client
inquiry.belongsTo(client, {
    foreignKey: 'client_id',
});

module.exports = {client, inquiry, coffee, bakery};
