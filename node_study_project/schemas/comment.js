const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = new Schema({
    commenter: {
        type: String, //ObjectId 안됨
        required: true,
        ref: 'User',
    },
    comment: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);