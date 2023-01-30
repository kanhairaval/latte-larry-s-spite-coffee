const router = require('express').Router();
const { coffee } = require('../../models');

// get all coffee data
router.get('/', async (req, res) => {
    try{
        const coffeeData  = await coffee.findAll({
            attributes: ["id", "coffeeName", "description", "fileName"],
        });

        res.status(200).json(coffeeData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get one coffee by its id
router.get('/:id', async (req, res) =>{
    try {
        const coffeeData = await coffee.findByPk(req.params.id, {
            attributes: ["id", "coffeeName", "description", "fileName"],
        });

        if(!coffeeData){
            res.status(404).json({ message: 'No coffee found with this id!'});
            return
        }

        res.status(200).json(coffeeData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// create a new coffee
router.post('/', async (req, res) => {
    try{
      const coffeeData = await coffee.create(req.body);
      res.status(200).json(coffeeData);
    } catch (err) {
        console.log(err);
      res.status(400).json(err);
    }
});

// update a coffee information by its id
router.put('/:id', async (req, res) => {
    try{
      const coffeeData = await coffee.update(req.body, {
        where: {
          id: req.params.id,
        }
      });
  
      if(!coffeeData){
        res.status(404).json( { message: 'No coffee found with this id!' });
        return;
      }
  
      res.status(200).json(coffeeData);
  
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

// delete a coffee by its id value
router.delete('/:id', async (req, res) => {
    try{
      const coffeeData = await coffee.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if(!coffeeData){
        res.status(404).json( { message: 'No coffee found with this id!' });
        return;
      }
  
      res.status(200).json(coffeeData);
  
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;