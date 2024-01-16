import mongoose from "mongoose";
import { ListingAndReviews } from "./schemas/listingsAndReviews";

async function init() {
    const mongo = await mongoose.connect('mongodb://root:test123@127.0.0.1:27017/sample_airbnb?authSource=admin');
    mongo.set('debug', true);
    console.log('Félicitations, vous vous êtes connecté à la DB', mongo.connection.db.databaseName);

    // insérer un airbnb
    const newAirbnb = new ListingAndReviews({
        name: 'metropolitan e-campus',
        property_type: 'Condominium',
        price: 5000,
        forbidden: false
    });

    // persister vers la DB
    await newAirbnb.save();

    // récupération + modification
    const ecampus = await ListingAndReviews.findOne({
        _id: newAirbnb.id
    });

    if (!ecampus) {
        throw new Error("Element e-campus non trouvé");
    } 

    ecampus.name = "Mon airbnb trop cool";
    ecampus.price = 2500;

    await ecampus.save();

    // suppeimer
    await ecampus.deleteOne()
}

init();