let mongoose = require('mongoose');

let storeSchema = new mongoose.Schema({
}, {
  timestamps: true
});

let storeModel = mongoose.model('Store', storeSchema);

exports.model = storeModel;
exports.schema = storeSchema;