const express = require('express');
const { getAllSellers, addSlot, getSlots, addSlotRequest, getSlotRequest, updateSlotRequest, getSellerById } = require('../actions/slot-actions');

const router = express.Router();

// router.get('/books', verifyToken, getAllBooks);
router.get('/getAllSellers', getAllSellers);
router.post('/addSlot', addSlot);
router.get('/getSlots', getSlots);
router.post('/addSlotRequest', addSlotRequest);
router.get('/getSlotRequest', getSlotRequest);
router.put('/updateSlotRequest', updateSlotRequest);
router.get('/getSellerById', getSellerById);





// router.post('/login', loginUser);



module.exports = router;