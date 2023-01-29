const router = require('express').Router();
const { inquiry, client } = require('../../models');

// get all inquiries including its associated client data
router.get('/', async (req, res) => {
    try{
        const inquiryData = await inquiry.findAll({
          attributes: ["id","clientEmail", "message"],
          include: [{
            model: client,
            attributes: ["id","username","email"],
          }]
        });
        res.status(200).json(inquiryData);
      } catch(err) {
        res.status(500).json(err);
    }
});

// get one inquiry by its id value including its associated client data
router.get('/:id', async (req, res) => {
    try {
        const inquiryData = await inquiry.findByPk(req.params.id, {
        attributes: ["id","clientEmail", "message"],
            include: [{
              model: client,
              attributes: ["id","username","email"],
            }]
        });
    
        if (!inquiryData) {
          res.status(404).json({ message: 'No inquiry found with this id!' });
          return;
        }
    
        res.status(200).json(inquiryData);
      } catch(err) {
        res.status(500).json(err);
    }
});
  
// create a new inquiry
// router.post('/', async (req, res) => {
//    inquiry.create(req.body)
//     .then((inquiry)=>{})

//    }
// });

// delete the inquiry by its id value
router.delete('/:id', async (req, res) => {
    try{
        const inquiryData = await inquiry.destroy({
          where: {
            id: req.params.id
          }
        });
    
        if(!inquiryData){
          res.status(404).json( { message: 'No inquiry found with this id!' });
          return;
        }
    
        res.status(200).json(inquiryData);
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;