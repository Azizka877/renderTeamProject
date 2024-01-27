const express = require("express")
const {registerAdmi, loginAdmi} = require("../Controllers/user-controller");

router.post('/login', loginAdmi);
router.post('/register', registerAdmi);



const router = express.Router();