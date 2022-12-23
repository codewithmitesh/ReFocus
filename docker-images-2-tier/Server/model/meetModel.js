const mongoose = require('mongoose');

const meetSchema = new mongoose.Schema({

    meet_id: {
        type: String,
        required: true,
    },
    attendence_code: {
        type: String,
    },
    active_time: {
        type: Number,
    },
    popup_1: {
        // type: boolean,
        type: Boolean,
    },
    popup_2: {
        type: Boolean,
    },
    popup_3: {
        type: Boolean,
    }
}, {
    timestamps: true
})

// const meetModel
exports.getModel = async (meet_id) => {
    const currModel = mongoose.model(meet_id, meetSchema);
    return currModel;
}
// exports.meetSchema;

module.exports.getModel;