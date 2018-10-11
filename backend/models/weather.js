import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let weather = new Schema({
    lat: {
        type: Number
    },
    long: {
        type: Number
    },
    sunCond: {
        type: String
    },
    hi: {
        type: Number
    },
    lo: {
        type: Number
    }
});

export default mongoose.model('Weather', weather);