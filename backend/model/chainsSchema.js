import mongoose from 'mongoose';

const { Schema } = mongoose

const chainsSchema = new Schema({
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
    }

})

export const Chains =  mongoose.model('chain', chainsSchema)

