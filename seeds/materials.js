
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {id: 1, tagNumber: '34242', materialname: '10KgBottoms'},
        {id: 2, tagNumber: '34721', materialname: '10KgTops'},
        {id: 3, tagNumber: '34528', materialname: '40LbBottoms'},
        {id: 4, tagNumber: '34593', materialname: '40LbTops'},
        {id: 5, tagNumber: '15807', materialname: 'wings1'},
        {id: 6, tagNumber: '15080', materialname: 'wings2'},
        {id: 7, tagNumber: '964', materialname: 'Wog1'},
        {id: 8, tagNumber: '965', materialname: 'Wog2'},

      ]);
    });
};
