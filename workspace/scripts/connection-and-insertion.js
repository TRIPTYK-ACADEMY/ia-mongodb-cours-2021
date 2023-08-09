let db = connect("mongodb://root:test123*@localhost:27017");

// URL <protocol>:<username>:<password>@<host>:<port>
console.log('coucou je suis la db :', db);

// use technocite
db = db.getSiblingDB("technocite");

const result = db.classrooms.insertOne({
    code: "Spirou",
    capacity: 20,
    teachers: ["Sébastien","Bernard de larue","Jean Michel"]
});

console.log(result);

const toInsert = [
    {
        code: "Tintin",
        capacity: 20,
    },
    {
        code: "Gaston",
        capacity: 20,
    }
];

const multiResults = db.classrooms.insterMany(toInsert);
const classrooms = [];

for (let i = 0; i < 10; i++){
    classrooms.push({
        code: `${i.toString()}`,
    })
}

db.classrooms.insertMany(classrooms);