const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CategorySchema = new Schema ({
  name: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;