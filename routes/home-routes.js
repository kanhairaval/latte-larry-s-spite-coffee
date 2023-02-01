const router = require('express').Router();
const { coffee, bakery, client, inquiry } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {res.render('homepage')});

router.get('/profile', async (req, res) => {res.render('profile')});

// get all the coffee
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

// get all the bakery
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

// Use withAuth middleware to prevent access to route
router.get('/inquiry', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const clientData = await client.findByPk(req.session.client_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: inquiry }],
    });

    const clients = clientData.get({ plain: true });

    res.render('inquiry', {
      ...clients,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/inquiry');
    return;
  }

  res.render('login');
});

module.exports = router;