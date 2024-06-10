const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shipping = mongoose.Schema({
   fullName: String,
   StreetAddress:String,
   City:String,
   State:String,
   PostalCode:Number,
   Country:String,
   PhoneNumber:Number,
   userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
},{
    timestamps : true
})


const shippingModel = mongoose.model("shipping",shipping)

module.exports = shippingModel