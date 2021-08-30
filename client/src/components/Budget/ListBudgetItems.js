import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const StyleItems = styled.form`
.noboarder {
  display: inline;
	border: none;
}

.delete-element {
	background-color: white;
	border: none;
	color: red;
}

.entry-name {
	text-align: right;
	width: 150px;
}

.entry-amount {
	width: 80px
}

.item {
  display: inline;
}

.budgetItem {
  display: flexbox;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
`;

const ListBudgetItem = ({budgetItems, title}) => {
  return(
    <StyleItems>
      <Col lg="12">
        <h6 className="title">{title}</h6>
        {
          budgetItems.map((item) => {
            return (
              <div className="budgetItem">
                <p className="item">
                  <input type="text" className="noboarder entry-name" value={item.name}></input> 
                  <input type="text" className="noboarder entry-amount" value={`$${item.amount.toFixed(2)}`}></input>
                  <button className="delete-element">x</button>
                </p>
              </div>
            );
          })
        }
      </Col>
    </StyleItems>
  );
}

export default ListBudgetItem;