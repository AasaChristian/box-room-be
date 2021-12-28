
const router = require('express').Router();



const Loads = require('../Models/loads-model');

// for endpoints beginning with /api/auth


router.get('/find/:id', (req, res) => {

    Loads.getAll()
    .then(found => {
        if (!found){
        res.status(400).json({message:`no loads found`})  
        }
        res.status(200).json(found)
        console.log(found)
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

// router.put('/unComplete/:link', (req, res) => {

//   // console.log(req.body,"body")
//   let { name, userId, exerciseId, sets, reps, weight, completion} = req.body;
//   let link = req.params.link
//   const updateObj = {
//     name: name,
//     link: link,
//     userId: userId,
//     exerciseId: exerciseId,
//     sets: sets,
//     reps, reps,
//     weight: weight,
//     completion: completion
// }
// Regimen.unComplete(updateObj, link)

// .then(updated => {

//     const uid = updated[0].userId
//     // console.log(userId, "userId HERE")
//     Regimen.findByuserId(uid)
//     .then(found => {
//       console.log("here")
//         if (!found){
//         res.status(400).json({message:`User has no regimen`})  
//         }
//         res.status(200).json(found)
//         console.log("found")
//     })
//     .catch(err => {
//         console.log(err,"catch")
//     })

// }).catch(err => res.status(500).json({message: "update unsuccesful"}), console.log("error here"))
 
// });

// router.delete('/remove/:id', (req, res) => {
//     let id = req.params.id

//     Regimen.remove(id)
//   .then(removed => {
//       if (removed == 1){
//         res.status(200).json({message: "regimen was removed"})
//       } else {
//         res.status(500).json({message: " error finding regimen"})
//       }
      
//   }).catch(err => res.status(500).json({message: "delete unsuccesful"}))
   
//   });


module.exports = router;
