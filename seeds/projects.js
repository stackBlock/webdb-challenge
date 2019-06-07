
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'clean the yard', description: 'call some friends', complete: false },
        { name: 'wash the car', description: 'find a carwash', complete: false },
        { name: 'mow the grass', description: 'get a lawnmower', complete: false }
      ]);
    });
};
