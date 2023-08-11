let db = connect("mongodb://root:test123*@localhost:27017");

db = db.getSiblingDB("sample_mflix");

const movies = db.movies.find({
    cast: "Keanu Reeves",
}).projection({
    title: 1,
    _id : 0,
})

console.log(movies);



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

