import { connect } from 'mongoose';
import { MovieModel } from './schemas/movies';

async function init() {
    const connection = await connect('mongodb://root:test123@127.0.0.1:27017/sample_mflix?authSource=admin');

    console.log('Connecté !');

    const matrix = await MovieModel.find({
        title: 'The Matrix'
    });
    
    console.log(matrix);
}

init();