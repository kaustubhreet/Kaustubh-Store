const addToCartModel = require("../../models/cartProduct")

const clearCartProduct = async (req, res) => {
    try {
        const currentUserId = req.userId;
        const addToCartProductId = req.body.ids
        console.log(addToCartProductId);

        const clearCart = await addToCartModel.deleteMany({ _id: { $in: addToCartProductId }, userId: currentUserId });

        res.json({
            message: "Cart cleared successfully",
            error: false,
            success: true,
            data: clearCart
        });
    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = clearCartProduct;