
const router = require('express').Router();



const Trailers = require('../Models/trailers-model');

// for endpoints beginning with /api/auth

router.get('/all', (req, res) => {


  Trailers.getAll()
  .then(found => {
      if (!found){
      res.status(400).json({message:`No trailers found`})  
      }
      res.status(200).json(found)
  })
  .catch(err => {
      console.log(err,"catch")
  })
  
})


router.post('/add', (req, res) => {
  let trailer = req.body;
  console.log(trailer, "trailer")
  Trailers.addTrailer(trailer)
    .then(saved => {
        console.log(saved, "saved")
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


module.exports = router;
