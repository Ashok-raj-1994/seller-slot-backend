const Seller = require('../../model/Sellers');

const getSellerById = async (req, resp) => {

    const { id } = req.query;
    const seller = await Seller.findById(id);
    resp.send(seller);

}

module.exports.getSellerById = getSellerById;