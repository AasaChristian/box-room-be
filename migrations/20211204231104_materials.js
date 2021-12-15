exports.up = function(knex) {
    return knex.schema.createTable("materials", tbl => {
        tbl.increments();
        tbl.string('tagNumber').notNullable();
        tbl.string('materialname').notNullable();

    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("materials")
  
};