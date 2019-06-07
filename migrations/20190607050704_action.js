
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl.increments();
        tbl.string('description', 128)
            .notNullable()
            .unique();
        tbl.string('notes', 128);
        tbl.boolean('completed')
            .notNullable();
        tbl.integer('action_Id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
