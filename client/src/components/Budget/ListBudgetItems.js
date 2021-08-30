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
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 60px;
  text-decoration: underline;
  tex
}
`;

const ListBudgetItem = ({budgetItems, title}) => {
  return(
    <StyleItems>
      <Col lg="12">
        <h6 className="title"><i><b>{title}</b></i></h6>
        {
          budgetItems.map((item) => {
            return (
              <div className="budgetItem">
                <div className="item">
                  <input type="text" className="noboarder entry-name" value={item.name}></input> 
                  <input type="text" className="noboarder entry-amount" value={`$${item.amount.toFixed(2)}`}></input>
                  <button className="delete-element">x</button>
                </div>
              </div>
            );
          })
        }
      </Col>
    </StyleItems>
  );
}

export default ListBudgetItem;