import mongoose from 'mongoose';

const { Schema } = mongoose

const braceletsSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    img2 : {
        type : String,
        required : true
    },
    quantity : {
        type : String
    },
    variants : {
        type : String
    },
    productId : {
        type : String
    }

})

export const Bracelets =  mongoose.model('bracelet', braceletsSchema)

