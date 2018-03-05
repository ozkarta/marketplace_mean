let mongoose = require('mongoose');
let LocalizationString = require('./types/localization.type');
let categorySchema = new mongoose.Schema({
  categoryName: LocalizationString,
  friendlyId: LocalizationString,
  parentCategory: {type: mongoose.Schema.Types.ObjectId},
  childCategories: [{type: mongoose.Schema.Types.ObjectId}]

}, {
  timestamps: true
});

let categoryModel = mongoose.model('Category', categorySchema);

exports.model = categoryModel;
exports.schema = categorySchema;