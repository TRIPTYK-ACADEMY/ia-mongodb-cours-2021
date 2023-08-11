let db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB("sample_mflix");

const keanuReavesFilms = db.movies.find({
    cast: "Keanu Reeves",
}).projection({
    title: 1,
    _id : 0,
})

console.log(keanuReavesFilms);


const comedies = db.movies.find({
    genres: 'Comedy',
}).projection({
    genres: 1,
    title:  1,
    _id: 0,
});

console.log(comedies);


const between2002And2008 = db.movies.find({
    year: {
        $gte: 2002,
        $lte: 2008,
    }
}).sort({
    year: 1,
});

console.log(between2002And2008);


const mattDiamant = db.movies.find({
    cast: {
        $all: [`Chris O\'Donnell`, 'Matt Damon']
    }
});

console.log(mattDiamant);




// sortir les clés d'une db

// var keys = [];
// db.movies.find().forEach(function(doc) {
//     for (var key in doc) {
//         if (keys.indexOf(key) === -1) {
//             keys.push(key);
//         }
//     }
// });
// console.log(keys);

// '_id',         'plot',
//   'genres',      'runtime',
//   'cast',        'num_mflix_comments',
//   'poster',      'title',
//   'fullplot',    'languages',
//   'released',    'directors',
//   'writers',     'awards',
//   'lastupdated', 'year',
//   'imdb',        'countries',
//   'type',        'tomatoes',
//   'rated',       'metacritic'

