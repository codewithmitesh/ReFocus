const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
// authorized
const auth = async (req, res, next) => {
    try {
        const temp = req.body;
        console.log(typeof temp);
        console.log(temp)

        // var decodedData = decodeURIComponent(temp);
        // var jsonObject = JSON.parse(temp);
        // console.log();

        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
        console.log(verifyUser);

        const user = await User.findOne({
            _id: verifyUser._id,
        })
        console.log(user);
        console.log("User Logged in");
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).send(err);
    }
}
module.exports = auth;