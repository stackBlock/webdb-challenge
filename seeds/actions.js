
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { id: 1, description: 'need towels', notes: 'go to the store', completed: false, action_Id: 2 },
        { id: 2, description: 'need soap', notes: 'ask billy next door', completed: false, action_Id: 2 },
        { id: 3, description: 'need rake', notes: 'go back to the store', completed: false, action_Id: 1 }
      ]);
    });
};
