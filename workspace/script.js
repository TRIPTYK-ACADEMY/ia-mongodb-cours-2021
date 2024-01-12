let db = connect("mongodb://root:test123@localhost");
// équivalent du "use technocite"
db = db.getSiblingDB("sample_mflix");

let jurassic = db.movies.find({
    title: "Jurassic Park"
});

let jurassic2 = db.movies.find({
    title: {
        $ne: "Jurassic Park"
    }
});

// console.log(jurassic2);

let sousChamp = db.movies.find({
    'tomatoes.viewer.numReviews': {
        $gt: 500
    }
});

// console.log(sousChamp);

let georgeLucasFilms = db.movies.find({
    directors: {
        $in : ['George Lucas']
    }
});

// console.log(georgeLucasFilms);


let georgeAndSpielberg = db.movies.find({
    cast: {
        $all : ['Ewan McGregor','Natalie Portman']
    }
});

console.log(":( ",georgeAndSpielberg);
