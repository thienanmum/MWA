Question_1
db.zips.aggregate([
    {$match:{state:'IA'}},
    {$project: {_id:1}}
])

Question_2
db.zips.aggregate([
    {$match:{pop:{$lt: 1000}}},
    {$project: {_id:1}}
])

Question_3
db.zips.aggregate([
    {$group: {
        _id: {state:'$state', city:'$city'},
        cnt: {$sum: 1}
    }},
    {$match: {cnt: {$gt: 1}}},
    {$project: {state:'$_id.state', city:'$_id.city', numZips:'$cnt', _id:0}},
    {$sort: {state:1, city:1}}
])

Question_4
db.zips.aggregate([
    {$group: {
        _id: {state:'$state', city:'$city'},
        population: {$sum: '$pop'}
    }},
    {$sort: {'_id.state':1, population:1}},
    {$group: {
        _id:'$_id.state',
        city:{$first:'$_id.city'},
        population:{$first:'$population'}
    }},
    {$project: {state:'$_id', city:1, _id:0}},
    {$sort: {state:1}}    
])