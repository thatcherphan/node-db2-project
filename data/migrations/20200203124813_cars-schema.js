
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN', 128).unique().notNullable();
      tbl.string('make', 128).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission_type');
      tbl.string('title_status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
