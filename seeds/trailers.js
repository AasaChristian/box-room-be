exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trailers').del()
    .then(function () {
      // Inserts seed entries
      return knex('trailers').insert([
        {id: 9999991, tagNumber: '389', name: 'spicetrailer'}
      ]);
    });
};