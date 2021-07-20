const { Schema } = mongoose;

const categoryItemSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId,
  },
  category: {type: String},
  curPercent: {type: String},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const CategoryItem = mongoose.model('CategoryItem', categoryItemSchema);

module.exports = CategoryItem;
