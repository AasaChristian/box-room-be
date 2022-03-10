const db = require("../db-config.js");

module.exports ={
    addMaterial,
    getAll,
    remove,
    findById,
    updateMaterial
};

function getAll(){
    return db("materials").select("*").orderBy('materialname')
    // return db("materials").select("*")

}

function addMaterial(material){
    console.log(material, "Models")
    return db("materials").insert(material).returning("*")
}

function remove(id){
    return db("materials")
    .where({id})
    .del();
}

function findById(id){
    return db("materials").where({id})
}

async  function updateMaterial(material, id){
    await db("materials")
    .where({id})
    .update(material)
    return findById(id)  
}