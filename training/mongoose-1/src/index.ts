import mongoose from "mongoose";
import { ListingAndReviews } from "./schemas/listingsAndReviews";

async function init() {
    const mongo = await mongoose.connect('mongodb://root:test123@127.0.0.1:27017/sample_airbnb?authSource=admin');
    console.log('Félicitations, vous vous êtes connecté à la DB', mongo.connection.db.databaseName);

    const docs = await ListingAndReviews.find();

    console.log(docs);
}

init();