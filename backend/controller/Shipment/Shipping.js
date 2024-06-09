const uploadProductPermission = require("../../helpers/permission")
const shippingModel = require("../../models/shippingModel")

async function AddShippingController(req,res){
    try{
       // const sessionUserId = req.userId
    
        const saveShipping = new shippingModel(req.body)
        const saveAddress = await saveShipping.save()

        res.status(201).json({
            message : "Address added successfully",
            error : false,
            success : true,
            data : saveAddress
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = AddShippingController