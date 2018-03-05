let mongoose = require('mongoose');

let businessSchema = new mongoose.Schema({
}, {
  timestamps: true
});

let businessModel = mongoose.model('Business', businessSchema);

exports.model = businessModel;
exports.schema = businessSchema;