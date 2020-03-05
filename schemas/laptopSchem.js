const EntitySchema = require('typeorm').EntitySchema;
const Laptop = require('../models/laptop').Laptop;

module.exports = new EntitySchema({
    name: 'laptop',
    target: Laptop,
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true
        },
        name: {
            type: 'varchar',
            length: 15,
            nullable: false
        },
        releaseDate: {
            type: 'date',
            nullable: false
        },
    }
})