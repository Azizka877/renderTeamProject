const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const multer = require('multer');
const routes = require("./Routes/hotel-routes")


const APP = express();

APP.use('/hotels', routes)

APP.use(cors());
APP.use(express.json());
APP.get('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send('Api is running')
}
// APP.use(cookieParser())

const MONGODB_URI= process.env.MONGODB_URI
const PORT = process.env.PORT || 8000;
const sqlUser = process.env.SQL_USER;
const sqlPassword = process.env.SQL_PASSWORD;
mongoose.connect(MONGODB_URI);




// file uploading
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }

})
const upload = multer({
    storage: storage,
    
})








APP.listen(PORT, ()=>{
    console.log('connected in db');
})
