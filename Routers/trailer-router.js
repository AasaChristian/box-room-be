
const router = require('express').Router();



const Trailers = require('../Models/trailers-model');

// for endpoints beginning with /api/auth

router.get('/all', (req, res) => {

  console.log("trailers")

  Trailers.getAll()
  .then(found => {
      if (!found){
        console.log(found, "trailers")
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


router.delete('/remove/:id', (req, res) => {
  let id = req.params.id

Trailers.remove(id)
.then(removed => {
    if (removed == 1){
      res.status(200).json({message: "trailer was removed"})
    } else {
      res.status(500).json({message: " error finding trailer"})
    }
    
}).catch(err => res.status(500).json({message: "delete unsuccesful"}))
 
});



module.exports = router;
