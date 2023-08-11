let db = connect("mongodb://root:test123*@localhost:27017");

db = db.getSiblingDB("sample_mflix");

// compter le nombre de films dans le résultat
const movies = db.movies.find().count();

console.log(movies);