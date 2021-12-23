const db = require("../db-config.js");

module.exports ={
    addTrailer,
    getAll,
    remove
};

function getAll(){
    return db("trailers").select("*").orderBy('tagNumber')
}

function addTrailer(trailer){
    return db("trailers").insert(trailer).returning("*")
}

function remove(id){
    return db("trailers")
    .where({id})
    .del();
}
