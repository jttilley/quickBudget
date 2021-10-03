const { Schema, model } = require('mongoose');

const BudgetItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  isExpense: {
    type: Boolean,
    default: false,
  },
  isBusiness: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    default: null,
  },
})

const BudgetItem = model('BudgetItem',BudgetItemSchema);
module.exports = BudgetItem;