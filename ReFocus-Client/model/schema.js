import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
