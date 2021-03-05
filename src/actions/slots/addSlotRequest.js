const SlotRequest = require("../../model/SlotRequest");

const addSlotRequest = async (req, resp) => {

    const { slot, to } = req.body;

    const from = "buyer";

    const post = new SlotRequest({ slot, from, to });
    const result = await post.save();
    resp.send(result);

}


module.exports.addSlotRequest = addSlotRequest;