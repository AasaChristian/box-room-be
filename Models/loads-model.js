const db = require("../db-config.js");

module.exports ={
    addLoad,
    remove,
    updateLoad,
    findById,
    getAll
};
function getAll(){
    return db("loads").select("*")
     
}

function findById(id){
    return db("loads").where({id})
     
}

function addLoad(load){
    return db("loads").insert(load).returning("*")
}

async  function updateLoad(load, id){
    await db("loads")
    .where({id})
    .update(load)
    return findById(id)  
}

function remove(id){
    return db("loads")
    .where({id})
    .del();
}