const mongoose = require('mongoose');

const { Schema } = mongoose;

const budgetSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId,
  },
  name: {type: String},
  isPersonal: {type: Boolean},
  budgetItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "BudgetItem"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
