const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
  }

  type BudgetItem {
    type BudgetItem {
      _id: ID
      name: String
      amount: Float
      category: String
      isExpense: Boolean
      isBusiness: Boolean
      dueDate: Date
    }
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    budgetItems: [BudgetItem]!
    budgetItem(budgetItemId: ID!): BudgetItem
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    Profile
    removeProfile: Profile

    addBudgetItem(name: String!, amount: Float!, category: String!, isExpense: Boolean, isBusiness: Boolean, dueDate: Date)
    
    removeBudgetItem(budgetItemId: ID!)
    
    updateBudgetItem(budgetItemId: ID!,name: String!, amount: Float!, category: String!, isExpense: Boolean, isBusiness: Boolean, dueDate: Date)
  }
`;

module.exports = typeDefs;
