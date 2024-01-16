let db = connect("mongodb://root:test123@localhost");
// équivalent du "use technocite"
db = db.getSiblingDB("sample_mflix");

db.movies.aggregate([
    {
        $match: {
            'imdb.rating': {
                $lt: 5
            }
        }
    },
    {
        $unwind: '$directors'
    },
    {
        $group: {
            _id: '$directors',
            total: {
                $count: {}
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $limit: 10
    },
    {
        $out : {
            db: 'sample_mflix',
            coll: 'lame_directors'
        }
    }
]);