const mongoose = require('mongoose')

const shipping = mongoose.Schema({
   fullName: String,
   StreetAddress:String,
   City:String,
   State:String,
   PostalCode:Number,
   Country:String,
   PhoneNumber:Number,
   email:{
        ref : 'user',
        type : String,
   }
},{
    timestamps : true
})


const shippingModel = mongoose.model("shipping",shipping)

module.exports = shippingModel