
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', function (tbl) {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable()
            .unique();
        tbl.string('description', 128);
        tbl.boolean('complete')
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
