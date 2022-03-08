exports.up = function(knex) {
    return knex.schema.createTable("materials", tbl => {
        tbl.increments();
        tbl.string('tagNumber').notNullable();
        tbl.string('materialname').notNullable();
        tbl.binary('img', 1000000);

    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("materials")
  
};