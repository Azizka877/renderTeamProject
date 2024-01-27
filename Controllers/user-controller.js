const Hotel = require('../models/Register')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

//login
const loginAdmi = async (req, res) => {
    const { email, password } = req.body;
 
    Hotel.findOne({ email: email })
       .then((user) => {
          if (user) {
             bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                   res.json('password is incorrect');
                }
                if (result) {
                   res.json('login Successfuly');
                } else {
                   res.json('password is incorrect');
                }
             });
          } else {
             res.json('No record found');
          }
       })
       .catch((err) => {
          res.json(err);
       });

}


//signin
const registerAdmi = async (req, res) => {
    const {name,email,password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        Hotel.findOne({email: email})
        .then((user)=>{
            if(user){
                res.json('email exist');
            }else{
                RegisterModel.create({name:name,email: email,password: hash})
                .then(()=>{res.json('Account created')})
                .catch(err=>{
                     res.json(err);
                })
            }
        }).catch(err=>{
            res.json(err);
        })
    })

}

module.exports ={registerAdmi, loginAdmi}