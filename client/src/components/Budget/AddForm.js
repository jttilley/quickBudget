import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const StyleForm = styled.form`
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

  return (
    <StyleForm>
      <form key={name}>
        <h6>
          <label>Add item: </label>
          <input className="entry-title" placeholder="Type or select" id={`${name}-item`} value={itemName} list={name} onChange={(e) => {
              setItemName(e.target.value);
          }}/>
          <datalist id={name}>
          {
            subCategories.map((sub) => {
              return (
                  <option key={sub} value={sub}></option>
              );
            })
          }
          </datalist>
        </h6>
        <h6>
          <label>Total: </label>
          <input type="text" placeholder="Enter equation or total" id={`${name}-amt`} value={amount} data-name={name} className="entry-amount" onChange={(e) => {
              setAmount(e.target.value);
          }}/>
        </h6>
        <h6>
          <label>For: </label>
          <select name="entry-type" data-name={name} className="entry-type" onChange={(e) => {setBudgetType(e.target.value)}}>
            <option value="Budgeting">Budgeting</option>
            <option value="Expense">Expense</option>
          </select>
          <button data-name={name} className="save" onClick={handleAddItem}>Save</button>
        </h6>
      </form>
    </StyleForm>
  )
};

export default AddForm;