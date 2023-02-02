const router = require('express').Router();
const { coffee, bakery, client, Inquiry } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {res.render('homepage', { 
  logged_in: req.session.logged_in 
  })});

// router.get('/profile', async (req, res) => {res.render('profile')});

// get all the coffee
router.get('/coffee', async (req, res) => {
  try {
    const dbCoffeeData = await coffee.findAll();

    const coffees = dbCoffeeData.map((coffee) =>
      coffee.get({ plain: true })
    );

    res.render('coffee', {
      coffees,
      logged_in: req.session.logged_in 
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
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const clientData = await client.findByPk(req.session.client_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Inquiry }],
    });

    const clients = clientData.get({ plain: true });

    res.render('profile', {
      ...clients,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log(req.session);
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;