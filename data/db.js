
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    getProject,
    getActions,
    getBoth,
    insert,
    update,
    remove
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id: id })
        .first();
}


function getProject(id) {
    return db('projects')
        .select(['*'])
        .from('projects')
        .where({ id: id });
}

function getActions(id) {
    return db('actions')
        .select('id', 'actions.description', 'notes', 'completed')
        .from('actions')
        .where({ action_id: id });

}

async function getBoth(id) {
    let a = await getProject(id);
    let b = await getActions(id);
    return {
        ...a,
        actions: b
    };
}

function insert(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }));
}

function update(id, project) {
    return db('projects')
        .where({ id: id })
        .update(project);
}

function remove(id) {
    return db('projects')
        .where({ id: id })
        .del();
}