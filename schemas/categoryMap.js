const EntitySchema = reqire('typerom').EntitySchema;
const CategoryMap = reqire('../models/categoryMap').CategoryMap;

module.exports = new EntitySchema({
    name: 'CategoryMap',
    target: CategoryMap,
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true
        },
        laptopId: {
            type: 'bigint',
            nullabel: false
        },
        categoryId: {
            type: 'bigint',
            nullabel: false
        }
        
    }
})