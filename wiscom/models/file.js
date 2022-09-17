const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    }
}, {
    timestamps: true // createdAt, updatedAt 자동기록
});

module.exports = mongoose.model('File', FileSchema);