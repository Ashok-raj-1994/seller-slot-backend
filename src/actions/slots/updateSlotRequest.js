const SlotRequest = require('../../model/SlotRequest');

const updateSlotRequest = async (req, resp) => {

    const { id, status } = req.body;
    const result = await SlotRequest.updateOne({
        _id: id
    }, { status: status }, { upsert: true });
    resp.send(result);

}

module.exports.updateSlotRequest = updateSlotRequest;