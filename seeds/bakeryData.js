const { bakery } = require('../models');

const bakeryData = [
    {
        bakeryName: "Bagel",
        bakeryNote: "New York-style bagel topped with garlic, salt, poppy and sesame seeds.",
        fileName: "01-bagel.png"
    },
    {
        bakeryName: "Chocolate Chip Cookie",
        bakeryNote: "Semisweet chocolate chunks mixed in a thick, chewy cookie--soft on the inside and crunchy on the outside.",
        fileName: "02-chocolate-cookie.png"
    },
    {
        bakeryName: "Chocolate Brownie",
        bakeryNote: "Rich chocolate brownie with generous chunks of semisweet chocolate.",
        fileName: "03-chocolate-brownie.png"
    },
    {
        bakeryName: "Butter Croissant",
        bakeryNote: "Classic butter croissant with soft, flaky layers and a delightfully golden-brown crust.",
        fileName: "04-butter-croissant.png"
    },
    {
        bakeryName: "Cheese Danish",
        bakeryNote: "Flaky, butter croissant dough with soft, warm cheese spread in the center.",
        fileName: "05-cheese-danish.png"
    },
    {
        bakeryName: "Chocolate Croissant",
        bakeryNote: "Two generous pieces of chocolate wrapped in a butter croissant with soft, flaky layers and a golden-brown crust.",
        fileName: "06-chocolate-croissant.png"
    },
];

const seedBakery = () => bakery.bulkCreate(bakeryData);

module.exports = seedBakery;