const Slots = require('../../model/Slots');
const { errorMessage } = require('../../response/response');

const getSlots = async (req, resp) => {
    try {
        const { seller } = req.query;
        const slots = await Slots.find({ seller: { $regex: seller, $options: "i" } });
        resp.send(slots);
    } catch {
        resp.send(errorMessage('slot not found'));
    }
}

module.exports.getSlots = getSlots;