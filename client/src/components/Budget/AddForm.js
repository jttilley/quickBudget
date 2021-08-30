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

const AddForm = ({subCategories, name}) => {
  return (
    <StyleForm>
      <form>
        <h6>
          <label>Add item: </label>
          <input class="entry-title" list={name} />
          <datalist id={name}>
          {
            subCategories.map((sub) => {
              return (
                  <option value={sub}></option>
              );
            })
          }
          </datalist>
        </h6>
        <h6>
          <label>Amount: </label>
          <input type="text" data-name={name} class="entry-amount"/>
        </h6>
        <h6>
          <label>For: </label>
          <select name="entry-type" data-name={name} class="entry-type">
            <option value="Budgeting">Budgeting</option>
            <option value="Expense">Expense</option>
          </select>
          <button data-name={name} class="save">Save</button>
        </h6>
      </form>
    </StyleForm>
  )
};

export default AddForm;