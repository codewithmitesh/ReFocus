const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const sendmail = require('../middleware/sendMail');
exports.registerUser = (req, res) => {

    const {
        name,
        email,
        password,
        category
    } = req.body
    // validation each field should be filled
    console.log(JSON.stringify(req.body));
    if (!name || !email || !password || !category) {
        return res.status(400).json({
            msg: 'Please enter all fields'
        })
    }
    // validation passed

    User.findOne({
        email: email
    }).then(user => {

        if (user) {
            return res.status(400).json({
                msg: 'User is already exists'
            })
        }
        const newUser = new User({
            name,
            email,
            password,
            category
        })
        // console.log(newUser);

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
                if (err) throw err
                newUser.password = hash

                //creating the token and will store in user 
                const token = await newUser.generateAuthTokenManually();
                console.log(token);
                // storing the generated token in the cookie
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true
                });
                res.status(200).json({
                    success: true,
                    message: "new User Added Successfully"
                });
            });

            // console.log("cookie is set" + cookie);

            newUser.save().then(
                console.log(newUser)
            ).catch(err => console.log(err))

        });
    });
}


exports.loginUser = async (req, res, next) => {

    try {
        const email = req.body.email;
        const password = req.body.password;
        // const category = req.body.category;

        console.log(email);
        console.log(password);
        // console.log(category);

        const useremail = await User.findOne({
            email
        })
        // console.log(email);
        if (!useremail) {
            res.send({
                msg: "User is not exists"
            })
        }
        //match if password matches or not
        const isMatch = await bcrypt.compare(password, useremail.password);

        //creating the token and will store in user 
        const token = await useremail.generateAuthTokenManually();
        console.log("generated token is:- " + token);
        // storing the generated token in the cookie
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 900000000000),
            httpOnly: true,
            // secure: true
        });
        // console.log(`this is the cookie ${req.cookies.jwt}`)
        if (isMatch) {
            // res.json({
            //     msg: "User is logged in",

            // })
            console.log("this is user info:- " + useremail.name + useremail.email + useremail.category);
            // here can also save the user info and be stored in req.user
            if (useremail.category === "Student") {
                // res.redirect("/dashboard")
                // res.redirect("http://localhost:3000/studentHome")
                res.json({
                    msg: "Student Loggin sucessfully logged in",
                    category: "Student"
                })
            } else {
                res.json({
                    msg: "Teacher Loggin sucessfully logged in",
                    category: "Teacher"
                })
                // res.redirect("http://localhost:3000/teacherHome")
            }
            // res.send("user Logged in Successfully"); 
        } else {
            res.status(401).send({
                msg: "Invalid Password"
            })
        }
    } catch (err) {
        console.log(err.message);
    }
}

/**
 * Logout Routes:- 
 */

exports.logoutUsers = async (req, res) => {
    try {
        console.log(req.user);
        req.user.tokens = req.user.tokens.filter((currElement) => {
            return currElement.token !== req.token
        })
        res.clearCookie('jwt');
        console.log("logout successfully ")
        await req.user.save();
        res.send({
            success: true,
            message: "user Logged Out successfully"
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}






exports.userDashboard = (req, res) => {
    res.send("this is user dashboard");

}