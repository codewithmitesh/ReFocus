const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})


// Declaring method of generating token and saving that token in document 
userSchema.methods.generateAuthTokenManually = async function () {

    try {
        console.log(this._id);
        //generating tokens and storing it in current document and saving 
        const token = jwt.sign({
            _id: this._id.toString(),
            email: this.email,
        }, process.env.JWT_SECRET);
        this.tokens = this.tokens.concat({
            token: token
        });

        // saving the token in the document
        await this.save();
        console.log(token);
        return token;
    } catch (err) {
        res.send("The Error Part " + err);
        console.log(err)
    }
}

const userDB = mongoose.model('users', userSchema);
// const userDatabase = mongoose.model('userdatabase', userSchema);

module.exports = userDB; // exporting the userDB model to be used in other files