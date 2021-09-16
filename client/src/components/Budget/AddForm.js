import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import {Autocomplete} from '@material-ui/lab'
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const StyleInputs = styled.form`
.save{
	background-color: rgb(213, 218, 213);
	border-radius: 5px;
}
.save:hover {
	background-color: #3e8e41;
	color: white;
  }

h6 {
	margin-right: 15px;
}

label {
  margin-right: 5px;
}
`;

export const AddForm = ({subCategories, name}) => {
  const [itemName, setItemName ] = useState();
  const [amount, setAmount ] = useState();
  const [budgetType, setBudgetType ] = useState('Budgeting');

  const subCategoryProps = {
    options: subCategories,
    getOptionLabel: (option) => option,
  };
  
const budgetProps = {
  options: [
    'Budgeting',
    'Expense',
  ],
  getOptionLabel: (option) => option,
}
  


  const handleAddItem = (e) => {
    e.preventDefault();
    // check values
    const expense = budgetType !== 'Budgeting';
      
    if (itemName && !isNaN(amount)) {
      const newItem = {
        business: false,
        isExpense: expense, 
        name: itemName,
        amount: Number(amount),
        category: name,
      };
      console.log("🚀 ~ file: AddForm.js ~ line 39 ~ handleAddItem ~ newItem", newItem)
      // document.getElementById(`${name}-item`).textContent = "";
      // document.getElementById(`${name}-amt`).textContent = "";
      setItemName("");
      setAmount("");
    };

    // add to database
    // add item to list by changing state
  };   

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate>
      {/* <label>Add item: </label> */}
      <Autocomplete
        {...subCategoryProps}
        id="newBudgetItem"
        autoHighlight
        renderInput={(params) => <TextField {...params} label="Budget Item" />}
      />

    <TextField label="Equation or Total" />
    <Autocomplete
      {...budgetProps}
      id="newBudgetItem"
      autoHighlight
      renderInput={(params) => <TextField {...params} label="Budget or Expense" defaultValue="Budgeting" />}
    />
  </form>
  )
};

export default AddForm;