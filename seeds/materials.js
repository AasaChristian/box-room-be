
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {id: 9999991, tagNumber: '34242', materialname: 'Leg10KgBottoms'},
        {id: 9999992, tagNumber: '34721', materialname: 'Leg10KgTops'},
        {id: 9999993, tagNumber: '34528', materialname: 'Leg40LbBottoms'},
        {id: 9999994, tagNumber: '34593', materialname: 'Leg40LbTops'},
        {id: 9999995, tagNumber: '15807', materialname: 'wingsBottom'},
        {id: 9999996, tagNumber: '15808', materialname: 'wingsTop'},
        {id: 9999997, tagNumber: '17964', materialname: 'WogBottom'},
        {id: 9999998, tagNumber: '17965', materialname: 'WogTop'},
        {id: 9999999, tagNumber: '27761', materialname: 'Paw1'},
        {id: 99999910, tagNumber: '35366', materialname: 'Paw2'},
        {id: 99999911, tagNumber: '312997', materialname: 'Skin1'},
        {id: 99999912, tagNumber: '322053', materialname: 'Skin2'},
        {id: 99999913, tagNumber: '31455', materialname: 'KFC'},
      ]);
    });
};
