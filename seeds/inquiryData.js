// import client module
const { inquiry } = require('../models');

const inquiryData = [
    {
        message: "Could you please provide sandwitch options, so I can grab my lunch here?",
        client_id: 1,
    },
    {
        message: "Can you take an order for over 50 people? We are having an annual conference and trade show next week.",
        client_id: 2,
    },
    {
        message: "Can we have more customized options for coffee?",
        client_id: 2,
    },
]

const seedInquiry = () => inquiry.bulkCreate(inquiryData);

module.exports = seedInquiry;