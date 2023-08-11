const db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB('sample_mflix');

const NeilOrBrad = db.movies.find({
    $or: [
        {
            directors: "Neil Burger",
        },
        {
            directors: "Brad Furman",
        }
    ]
}).projection({
    _id: 0,
    title: 1,
    directors: 1,
});

console.log(NeilOrBrad);

const theOldest = db.movies.find({}).sort({
    year: 1,
}).limit(1);

console.log(theOldest);