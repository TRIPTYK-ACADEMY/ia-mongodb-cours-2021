let db = connect("mongodb://root:test123@localhost");
// équivalent du "use technocite"
db = db.getSiblingDB("technocite");

db.formators.insertOne({
    name : "Seb"
});

// on va chercher les formateurs
const formateurs = db.formators.find({
    name : "Seb"
});
// SELECT * FROM formators WHERE name="Seb";

console.log(formateurs);