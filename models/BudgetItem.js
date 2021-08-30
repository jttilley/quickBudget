const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const budgetItemSchema = new Schema({
  business: {
    type: Boolean,
    unique: false,
    required: true,
    default: false,
  },
  isExpense: {
    type: Boolean,
    unique: false,
    required: true,
    default: false,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  amount: {
    type: Number,
    unique: false,
    required: true,
  },
  category: {
    type: String,
    unique: false,
    required: true,
  },
  budgetId: {
    type: Boolean,
    unique: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const BudgetItem = mongoose.model('BudgetItem', budgetItemSchema);

module.exports = BudgetItem;
