const Slot = require("../../model/Slots");

const addSlot = async (req, resp) => {

    const { slot, seller } = req.body;

    const post = new Slot({ slot, seller });
    const result = await post.save();
    resp.send(result);

}


module.exports.addSlot = addSlot;