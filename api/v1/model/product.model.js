let mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
}, {
  timestamps: true
});

let productModel = mongoose.model('Product', productSchema);

exports.model = productModel;
exports.schema = productSchema;