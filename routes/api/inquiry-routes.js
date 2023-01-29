const router = require('express').Router();
const { inquiry, client } = require('../../models');
const withAuth = require('../../utils/auth');


// get all inquiries including its associated client data
router.get('/', async (req, res) => {
    try{
        const inquiryData = await inquiry.findAll({
          attributes: ["id", "message", "client_id"],
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
          attributes: ["id", "message", "client_id"],
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
// before that, logged in is checked. If client did not login, it will go to the login page
router.post('/', withAuth, async (req, res) => {
  try{
    const newInquiry = await inquiry.create({
      ...req.body,
      client_id: req.session.client_id,
    });

    res.status(200).json(newInquiry);

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// delete the inquiry by its id value
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const inquiryData = await inquiry.destroy({
          where: {
            id: req.params.id,
            client_id: req.session.client_id,
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