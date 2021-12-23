const db = require("../db-config.js");

module.exports ={
    addMaterial,
    getAll,
    remove
};

function getAll(){
    return db("materials").select("*").orderBy('tagNumber')
}

function addMaterial(material){
    return db("materials").insert(material).returning("*")
}

function remove(id){
    return db("materials")
    .where({id})
    .del();
}