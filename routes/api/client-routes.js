const router = require('express').Router();
const { client } = require('../../models');

// create new client
router.post('/', async(req, res) => {
    try {
        const dbClientData = await client.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(()=>{
            req.session.client_id = dbClientData.id;
            req.session.loggedIn = true;

            res.status(200).json(dbClientData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try{
        const dbClientData = await client.findOne({
            where: {
                email: req.body.email,
            },
        });

        if(!dClientData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!'});
            return;
        }

        const correctPassword = await dbClientData.checkPassword(req.body.password);

        if(!correctPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again!' });
            return;
        }

        req.session.save(()=>{
            req.session.client_id = dbClientData.id;
            req.session.loggedIn = true;

            res.status(200).json({ client: dbClientData, message: 'You are logged in!'})
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res)=>{
    if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else{
        res.status(404).end();
    }
});

module.exports = router;