exports.up = function(knex) {
    return knex.schema.createTable("trailers", tbl => {
        tbl.increments();
        tbl.string('tagNumber').notNullable();
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("trailers")
  
};