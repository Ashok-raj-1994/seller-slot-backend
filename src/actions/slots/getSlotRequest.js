const SlotRequest = require('../../model/SlotRequest');

const getSlotRequest = async (req, resp) => {
    const { seller } = req.query;
    const slotList = await SlotRequest.find({ to: { $regex: seller, $options: "i" } });
    resp.send(slotList);

}

module.exports.getSlotRequest = getSlotRequest;