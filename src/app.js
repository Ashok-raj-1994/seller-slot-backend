const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const cors = require('cors'); //import cors module

dotenv.config();
const app = express();

const port = process.env.PORT || 3301;

const slotRoute = require('./routes/slot-routes');

const whitelist = ['https://test-app-bd3a7.firebaseapp.com', 'http://localhost'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'https://test-app-bd3a7.firebaseapp.com');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(cors())
app.use(bodyParser.json());
app.use('/api', slotRoute);




mongoose.connect(process.env.dbUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log('Succesfully connected server')
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});