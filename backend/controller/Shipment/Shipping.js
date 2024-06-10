//const uploadProductPermission = require("../../helpers/permission")
const shippingModel = require("../../models/shippingModel")

async function AddShippingController(req,res){
    try{
        const currentUserId = req.userId
        console.log("current user",currentUserId);
       
        const shippingData = {
            ...req.body,
            userId: currentUserId
        };

        const saveShipping = new shippingModel(shippingData)
        const saveAddress = await saveShipping.save()

        res.status(201).json({
            message : "Address added successfully",
            error : false,
            success : true,
            data : saveAddress
        })
        console.log("shipping",res);
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = AddShippingController