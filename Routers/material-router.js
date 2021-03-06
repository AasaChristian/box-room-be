
const router = require('express').Router();



const Materials = require('../Models/materials-model');

// for endpoints beginning with /api/materials

router.get('/all', (req, res) => {


  Materials.getAll()
  .then(found => {
    console.log(found, 'materials found')
      if (!found){
      res.status(400).json({message:"No materials found"})  
      }
      res.status(200).json(found)
  })
  .catch(err => {
      console.log(err,"catch")
  })
  
})

router.get('/find/:id', (req, res) => {
    let id = req.params.id
    // console.log(id, "id")

    Materials.findById(id)
    .then(found => {
        if (!found){
        res.status(400).json({message:`materials at id ${id} doesn't exist`})  
        }
        res.status(200).json(found)
    })
    .catch(err => {
        console.log(err,"catch")
    })
    
})

router.post('/add', (req, res) => {
  let material = req.body;
  console.log(material, "material")
  const newObj = {
    tagNumber : material.tagNumber,
    materialname : material.name
  }
  Materials.addMaterial(newObj)
    .then(saved => {
        console.log(saved, "saved")
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/update/:id', (req, res) => {
  let { tagNumber, name } = req.body;
  let id = req.params.id
  const updateObj = {
    tagNumber: tagNumber,
    materialname: materialname
    
}
Materials.updateMaterial(updateObj, id)

.then(updated => {
    // console.log(updated, "updated")
    res.status(200).json({updated: updated})
}).catch(err => res.status(500).json({message: "update unsuccesful"}))
 
});

router.delete('/remove/:id', (req, res) => {
    let id = req.params.id

  Materials.remove(id)
  .then(removed => {
      if (removed == 1){
        res.status(200).json({message: "material was removed"})
      } else {
        res.status(500).json({message: " error finding material"})
      }
      
  }).catch(err => res.status(500).json({message: "delete unsuccesful"}))
   
  });


module.exports = router;
