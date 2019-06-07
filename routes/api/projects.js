const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../../knexfile').development;
console.log(knexConfig);
const db = knex(knexConfig);


router.get('/', (req, res) => {
    db('projects').then(function (data) {
        res.json(data);
    })

})

// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     db('projects').where({ id: id }).then(function (data) {
//         res.send(data);
//     })
// })



router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('projects as p')
        .join('actions as a', 'p.id', 'a.action_Id')
        .select('p.name', 'a.id', 'a.description', 'a.notes', 'a.completed')
        .where('a.action_ID', id)
        .then(function (data) {
            res.json(data);
        })
})

// res.status(200).json({ Message: `Deleted Project #${count}` });

router.post('/', (req, res) => {
    const { name, description, complete } = req.body;
    db.insert(name, description, complete)
        .into('projects')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('projects')
        .where({ id: id })
        .update(changes)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('projects')
        .where({ id: id })
        .del()
        .then(count => {
            res.status(200).json({ Message: `Deleted Project #${count}` });
        });
});


module.exports = router;