import mongoose from 'mongoose';

const connection = {};
const uri = process.env.MONGODB_URI;

async function connect() {
	if (connection.isConnected) {
		return;
	}

	const db = await mongoose.connect(uri);

	connection.isConnected = db.connections[0].readyState;
}

export default connect;
