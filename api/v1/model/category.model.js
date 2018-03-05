let mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
}, {
  timestamps: true
});

let categoryModel = mongoose.model('Category', categorySchema);

exports.model = categoryModel;
exports.schema = categorySchema;