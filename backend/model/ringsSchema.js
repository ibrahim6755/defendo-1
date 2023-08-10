import mongoose from 'mongoose';

const { Schema } = mongoose

const ringsSchema = new Schema({
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
        type : Array
    },
    colors : { 
        type : Array
    },
    productId : {
        type : String
    }
    

})

export const Rings =  mongoose.model('ring', ringsSchema)

