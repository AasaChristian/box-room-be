
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {id: 9999991, tagNumber: '34242', name: 'Leg10KgBottoms'},
        {id: 9999992, tagNumber: '34721', name: 'Leg10KgTops'},
        {id: 9999993, tagNumber: '34528', name: 'Leg40LbBottoms'},
        {id: 9999994, tagNumber: '34593', name: 'Leg40LbTops'},
        {id: 9999995, tagNumber: '15807', name: 'wingsBottom'},
        {id: 9999996, tagNumber: '15808', name: 'wingsTop'},
        {id: 9999997, tagNumber: '17964', name: 'WogBottom'},
        {id: 9999998, tagNumber: '17965', name: 'WogTop'},
        {id: 9999999, tagNumber: '27761', name: 'Paw1'},
        {id: 99999910, tagNumber: '35366', name: 'Paw2'},
        {id: 99999911, tagNumber: '312997', name: 'Skin1'},
        {id: 99999912, tagNumber: '322053', name: 'Skin2'},
        {id: 99999913, tagNumber: '31455', name: 'KFC'},
      ]);
    });
};
