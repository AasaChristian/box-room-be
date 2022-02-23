
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials')
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {id: 1, tagNumber: '34242', materialname: 'Leg10KgBottoms'},
        {id: 2, tagNumber: '34721', materialname: 'Leg10KgTops'},
        {id: 3, tagNumber: '34528', materialname: 'Leg40LbBottoms'},
        {id: 4, tagNumber: '34593', materialname: 'Leg40LbTops'},
        {id: 5, tagNumber: '15807', materialname: 'wingsBottom'},
        {id: 6, tagNumber: '15808', materialname: 'wingsTop'},
        {id: 7, tagNumber: '17964', materialname: 'WogBottom'},
        {id: 8, tagNumber: '17965', materialname: 'WogTop'},
        {id: 9, tagNumber: '27761', materialname: 'Paw1'},
        {id: 10, tagNumber: '35366', materialname: 'Paw2'},
        {id: 11, tagNumber: '312997', materialname: 'Skin1'},
        {id: 12, tagNumber: '322053', materialname: 'Skin2'},
        {id: 13, tagNumber: '31455', materialname: 'KFC'},




      ]);
    });
};
