const db = require("../db-config.js");

module.exports ={
    // findBytrailerId,
    addTrailer,
    // findLoggedExercises
};

function getAll(){
    return db("trailers").select("*").orderBy('name')
     
}
// function findByuserId(userId){
//     return db("logs")
//     .where("logs.userId", userId)
//     .join("regimen", "regimen.id", "logs.regimenId")
//     .join("users as u", "u.id", "logs.userId")
//     .join("exercises", "exercises.id", "regimen.exerciseId")
//     .select("regimen.id as regimenID", "regimen.weight as regimenWeight", "regimen.name as regimenName", "logs.weight as LoggedWeight", "logs.reps as LoggedReps","logs.set as LoggedSet","*" ) 
// }

function addTrailer(trailer){
    return db("trailers").insert(trailer).returning("*")
}

// function findLoggedExercises(userId, exId){
//     return db("logs")
//     .where("logs.userId", userId)
//     .join("regimen", "regimen.id", "logs.regimenId")
//     .join("users as u", "u.id", "logs.userId")
//     .join("exercises", "exercises.id", "regimen.exerciseId")
// }