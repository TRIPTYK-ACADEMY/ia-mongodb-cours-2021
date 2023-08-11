let db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB("sample_mflix");

const moviesRatingInf5 = db.movies.aggregate([
    {
        $match : {
            "imdb.rating" : {
                $lt : 5,
            }
        }
    },
    {
        $unwind: "$directors" // créer un fichier pour chaque directors
    },
    {
        $group: {
            _id : "$directors", // grouper par directors
            total: {
                $count: {}
            }
        }
    },
    {
        $sort: {
            total: -1 // ordre descendant
        }
    }
])

console.log(moviesRatingInf5);

