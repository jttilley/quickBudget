const mongoose = require('mongoose');

const { Schema } = mongoose;

const budgetItemSchema = new Schema({
  budgetId: {
    type: Schema.Types.ObjectId
  },
  isExpense: {type: Boolean},
  category: {type: String},
  amount: {type: Number},
  name: {type: String},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const BudgetItem = mongoose.model('BudgetItem', budgetItemSchema);

module.exports = BudgetItem;
