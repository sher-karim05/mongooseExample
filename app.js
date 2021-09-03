import mongoose from 'mongoose';
import { float } from 'webidl-conversions';
const {Schema}= mongoose;

const BookSchema = new Schema ({
    title: String,
    aurthor: String,
    price: Number,
    comments: [{body: String, date: Date}],
    Date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes : Number,
        feedback: [{body: String, date: Date}]
    },
    //Embaddded sub-documents
    detail: {
        modelNumber: Number,
        hardcover: Boolean,
        reviews: Number,
        rank: Number
    }
})

module.exports  = mongoose.model('Book',BookSchema);