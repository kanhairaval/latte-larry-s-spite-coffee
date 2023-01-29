const router = require('express').Router();
const { bakery } = require('../../models');

// get all bakery data
router.get('/', async (req, res) => {
    try{
        const bakeryData  = await bakery.findAll({
            attributes: ["id", "bakeryName", "bakeryNote", "fileName"],
        });

        res.status(200).json(bakeryData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get one bakery by its id value
router.get('/bakery/:id', async (req, res) =>{
    try {
        const bakeryData = await bakery.findByPk(req.params.id, {
            attributes: ["id", "bakeryName", "bakeryNote", "fileName"],
        });

        if(!bakeryData){
            res.status(404).json({ message: 'No bakery found with this id!'});
            return
        }

        res.status(200).json(bakeryData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// create a new bakery
router.post('/bakery', async (req, res) => {
    try{
      const bakeryData = await bakery.create(req.body);
      res.status(200).json(bakeryData);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
});

// update a bakery information by its id
router.put('/bakery/:id', async (req, res) => {
    try{
      const bakeryData = await bakery.update(req.body, {
        where: {
          id: req.params.id,
        }
      });
  
      if(!bakeryData){
        res.status(404).json( { message: 'No bakery found with this id!' });
        return;
      }
  
      res.status(200).json(bakeryData);
  
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

// delete a bakery by its id value
router.delete('/bakery/:id', async (req, res) => {
    try{
      const bakeryData = await bakery.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if(!bakeryData){
        res.status(404).json( { message: 'No bakery found with this id!' });
        return;
      }
  
      res.status(200).json(bakeryData);
  
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;