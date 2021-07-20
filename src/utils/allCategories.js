const personalCategories = [
  {
    name: "Income",
    subCategories: [
      "Weekly", 
      "Bi-Weekly", 
      "Monthly", 
      "One Time"
    ]
  },{
    name: "Mortgage/Rent",
    minPercent: 25,
    maxPercent: 35,
    startPercent: 25,
    subCategories: [
      "1st Mortgage",
      "2nd Mortgage",
      "Rent",
      "Repairs/Maint.",
      "Real Estate Taxes",
      "Association Dues"
    ]
  },{
    name: "Utilities",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Electricity",
      "Gas",
      "Water",
      "Trash",
      "Phone(s)",
      "Internet",
      "TV Package",
      "Sling",
      "Netflix",
      "Amazon Prime",
      "Hulu",
      "Disney"
    ]
  },{
    name: "Insurance",
    minPercent: 10,
    maxPercent: 25,
    startPercent: 10,
    subCategories: [
      "Life",
      "Health",
      "Car",
      "Home Owners/Renters",
      "Disability",
      "Long-Term Care"
    ]
  },{
    name: "Giving",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Tithes",
      "Charity"
    ]
  },{
    name: "Transportation",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Gas & Oil",
      "Repairs & Tires",
      "License & Taxes",
      "Bus/Train/Tram Passes"
    ]
  },{
    name: "Debt",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Credit Card",
      "Car Payment",
      "Student Loan",
      "HELOC Loan",
      "Personal Loan"
    ]
  },{
    name: "Food",
    minPercent: 5,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Groceries",
      "Resturants/Takeout"
    ]
  },{
    name: "Medical/Health",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Vitamins",
      "Medications",
      "Doctors Bills",
      "Dentist",
      "Optometrist"
    ]
  },{
    name: "Personal",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Pocket Money",
      "Toiletries",
      "Subscriptions",
      "Organization Dues",
      "Cosmetics/Hair Care",
      "Education/Tuition",
      "Books/Supplies",
      "Baby Supplies",
      "Child Care/Sitter",
      "Child Support",
      "Alimony",
      "Pet Supplies",
      "Music/Technology",
      "Misculaneous"
    ]
  },{
    name: "Recreation",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Gym Membership",
      "Entertainment",
      "Trainer",
      "Sport Dues"
    ]
  },{
    name: "Savings",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Emergency Fund",
      "Christmas",
      "Birthdays",
      "Vacation",
      "Retirement"
    ]
  },{
    name: "Clothing",
    minPercent: 2,
    maxPercent: 7,
    startPercent: 5,
    subCategories: [
      "Adults", 
      "Children", 
      "Cleaning/Laundry"
    ]
  }
];

const businessCategories = [
  {
    name: "Income",
    subCategories: ["Daily", "Weekly", "Bi-Weekly", "Monthly", "One Time"]
  },{
    name: "Employees",
    minPercent: 5,
    maxPercent: 50,
    startPercent: 25,
    subCategories: ["Reception","Sales","Labor","Software","Engineering","Managment","Tech","Assistance","Remote","Human Resources"]
  },{
    name: "Property",
    minPercent: 5,
    maxPercent: 25,
    startPercent: 10,
    subCategories: ["Mortgage","Rent","Insurance","Taxes"]
  },{
    name: "Advertising",
    minPercent: 5,
    maxPercent: 25,
    startPercent: 20,
    subCategories: ["Publications","Signs"]
  },{
    name: "Petty cash",
    minPercent: 2,
    maxPercent: 10,
    startPercent: 5,
    subCategories: ["Event","Wine & Dine","Conference","Customer"]
  },{
    name: "Insurance",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: ["Car","Workers Comp","Renters","Mortgage","Health","Dental","Vision"]
  },{
    name: "Miscellaneous",
    minPercent: 5,
    maxPercent: 30,
    startPercent: 15,
    subCategories: []
  }
];

export default = {
  personalCategories,
  businessCategories
};
