const router = require('express').Router();
const { coffee, bakery } = require('../models');

router.get('/', async (req, res) => {res.render('homepage')});

router.get('/login', async (req, res) => {res.render('login')});

router.get('/coffee', async (req, res) => {
  try {
    const dbCoffeeData = await coffee.findAll();

    const coffees = dbCoffeeData.map((coffee) =>
      coffee.get({ plain: true })
    );

    res.render('coffee', {
      coffees,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/bakery', async (req, res) => {
  try {
    const dbBakeryData = await bakery.findAll();

    const bakeries = dbBakeryData.map((food) =>
      food.get({ plain: true })
    );

    res.render('food', {
      bakeries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;