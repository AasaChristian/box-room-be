exports.up = function(knex) {
    return knex.schema.createTable("loads", tbl => {
        tbl.increments();
        tbl.integer("materialId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("materials")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.integer("trailerId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("trailers")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.integer("count").notNullable();
        tbl.integer("maidenTrailerId").notNullable();
        tbl.integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.timestamp("dateAdded", 20).defaultTo(knex.fn.now());
    })
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("loads")
  
};