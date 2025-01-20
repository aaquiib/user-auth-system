const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieparser = require('cookie-parser');
const path = require('path');

app.set('view engine', 'ejs');

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
})

app.post('/create', async(req, res) => {
    let { username, email, password, age } = req.body;
    //checking for same email
    let user = await userModel.findOne({email});
    if(user) return res.send("email already used, please try a different email.");

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            // Store hash in your password DB.
            let userDetails = await userModel.create({
                username,
                email,
                password: hash,
                age
            })
            //jwt tokens and passing them to browser
            let token = jwt.sign({ email }, 'secret');
            res.cookie('token', token);

            res.render("account",{data:"Account Created"});
        });
    });


})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.send("something went wrong"); //wrong email

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({email:user.email }, 'secret');
            res.cookie('token', token);

            res.render("account",{data:"Login Successful"});
        }
        else return res.send("something went wrong"); //wrong password  
    })
})


app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/');
})



app.listen(3000);