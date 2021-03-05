const { addSlot } = require('./slots/addSlot');
const { addSlotRequest } = require('./slots/addSlotRequest');
const { getAllSellers } = require('./slots/getAllSellers');
const { getSellerById } = require('./slots/getSellerById');
const { getSlotRequest } = require('./slots/getSlotRequest');
const { getSlots } = require('./slots/getSlots');
const { updateSlotRequest } = require('./slots/updateSlotRequest');


module.exports.addSlot = addSlot;
module.exports.getAllSellers = getAllSellers;
module.exports.getSlots = getSlots;
module.exports.addSlotRequest = addSlotRequest;
module.exports.getSlotRequest = getSlotRequest;
module.exports.updateSlotRequest = updateSlotRequest;
module.exports.getSellerById = getSellerById;


