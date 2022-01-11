
const router = require('express').Router();



const Loads = require('../Models/loads-model');

// for endpoints beginning with /api/auth


router.get('/find/:id', (req, res) => {
const id = req.params.id
    Loads.findById(id)
    .then(found => {
      console.log(found, "found")
        // if (!found){
        // res.status(400).json({message:`no loads found`})  
        // }
        // res.status(200).json(found)
        // console.log(found)
    })
    .catch(err => {
        console.log(err,"catch")
    })
    
})


router.get('/all', (req, res) => {
  
      Loads.getAll()
      .then(found => {
        console.log(found, "found")
          // if (!found){
          // res.status(400).json({message:`no loads found`})  
          // }
          // res.status(200).json(found)
          // console.log(found)
      })
      .catch(err => {
          console.log(err,"catch")
      })
      
  })

router.post('/add', (req, res) => {
  let load = req.body;
console.log(load, "load")
  Loads.addLoad(load)
    .then(saved => {
        console.log(saved, "saved")
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/update/:id', (req, res) => {

  console.log(req.body,"body")
  let {userId, tagNumber, materialId, trailerId, count } = req.body;
  let id = req.params.id
  const updateObj = {
    tagNumber:tagNumber,
    materialId: materialId,
    trailerId: trailerId,
    count: count
}
Loads.updateLoad(updateObj, id)

.then(updated => {

console.log(updated, "updated")
res.status(201).json(updated);


}).catch(err => res.status(500).json({message: "update unsuccesful"}), console.log("error here"))
 
});


router.delete('/remove/:id', (req, res) => {
    let id = req.params.id

    Loads.remove(id)
  .then(removed => {
    console.log(removed, "removed")
      // if (removed == 1){
      //   res.status(200).json({message: "load was removed"})
      // } else {
      //   res.status(500).json({message: " error finding regimen"})
      // }
      
  }).catch(err => res.status(500).json({message: "delete unsuccesful"}))
   
  });


module.exports = router;
