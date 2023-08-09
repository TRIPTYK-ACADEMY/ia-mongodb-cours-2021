let db = connect('mongodb://root:test123*@localhost:27017');

// use technocite;
db = db.getSiblingDB('technocite');

// récupérer des données
// équivalent du SELECT * FROM <collection>
// const classrooms = db.classrooms.find();


// équivalent du SELECT * FROM classrooms WHERE code="Spirou"
const classrooms = db.classrooms.find({
    code : "Spirou", // commande classique
    code : { $eq: "Spirou"}, // opérateur avec argument $eq = Là où le "code est égale à 'Spirou'"
    capacity : { $gt: 10} // greater than
});



console.log(classrooms);