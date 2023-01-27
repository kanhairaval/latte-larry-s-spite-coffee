const { bakery } = require('../models');

const bakeryData = [
    {
        bakeryName: "Bagel",
        bakeryNote: "New York-style bagel topped with garlic, salt, poppy and sesame seeds."
    },
    {
        bakeryName: "Chocolate Chip Cookie",
        bakeryNote: "Semisweet chocolate chunks mixed in a thick, chewy cookie--soft on the inside and crunchy on the outside."
    },
];

const seedBakery = () => bakery.bulkCreate(bakeryData);

module.exports = seedBakery;