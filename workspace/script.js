let db = connect("mongodb://root:test123@localhost");
// équivalent du "use technocite"
db = db.getSiblingDB("technocite");

// on va insérer dans "students" amaury
const newStudent = db.students.insertOne({
    name : "Amaury petit"
});

console.log(newStudent);

const newStudents = db.students.insertMany([
    {
        name : "Amaury grand"
    },
    {
        name : "Amaury moyen"
    }
]);

// snake_case
// camelCase
// PascalCase
// SCREAMINGCASE
// kebab-case
// Sponge

console.log(newStudents);