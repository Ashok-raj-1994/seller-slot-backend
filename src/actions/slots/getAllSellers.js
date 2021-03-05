const Seller = require('../../model/Sellers');

const getAllSellers = async (req, resp) => {

    const { name } = req.query;

    const sellersList = await Seller.find({ name: { $regex: name, $options: "i" } });
    resp.send(sellersList);
}

module.exports.getAllSellers = getAllSellers;