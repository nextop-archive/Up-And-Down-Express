var express = require('express');
var router = express.Router();
const { getConnection } = require('typeorm');
const Legend = require('../schemas/legendSchema');
const Category = require('../schemas/categorySchema')

router.get('/', function(req, res, next) {
    const connection =getConnection();
    const repository1 = connection.getRepository(Legend.options.name);
    const repository2 = connection.getRepository(Category.options.name);
    repository1.find().then((lengeds) => {
        return repository2.find().then((categories)=> {
            return lengeds.map((legned) => {
                categories.filter((category) => {
                    return category.lengedId === legned.id;
                });
                return {
                    id: legned.id,
                    lable: lengeds.label,
                    category: category
                }
                res.status(200).json(lengeds);
            });
        });
    });
});

router.post('/', function(req, res, next) {
    const newLabel = req.body;
    const connection = getConnection();
    const repostiory = connection.getRepository(Lenged.options.name);
    repostiory.save({
        label: newLabel.name,
    });
    res.status(201).json();
});

router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    const connection =getConnection();
    const repository = connection.getRepository(Lenged.options.name);
    repository.find({ id: id }).then((result) => {
        res.status(200).json(result);
    });
});

router.get('/:id/category', function(req, res, next) {
    const { id } = req.params;
    const connection = getConnection();
    const repository = connection.getRepository(Category.options.name);
    repository.find({ lengedId: id }).then((result) => {
        res.status(200).json(result);
    })
})

module.exports = router;