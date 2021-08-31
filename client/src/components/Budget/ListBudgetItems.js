import React from 'react';
import styled from 'styled-components';
import { Grid, Paper, makeStyles, List, ListItem } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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

/* .item {
  display: inline;
} */

/* .budgetItem {
  display: flexbox;
} */

.title {
  /* display: flex;
  justify-content: flex-end; */
  margin-top: 10px;
  margin-right: 60px;
  text-decoration: underline;
  textAlign: "center",
}

.money {
  margin-left: 4px;
  margin-right: -1px;
  height: 16px;
}

li {
  height: 30px;
  margin: 0px 0px;
  list-style-type: none;
}

input {
  /* height: 22px; */
}

/* ul {
  margin-bottom: 5px;
  height: 25px;

} */
`;

// use lists to list these



export const ListBudgetItems = ({budgetItems, title}) => {

  return(
      <Grid item xs>
        <StyleItems>
          <h6 ><i><b>{title}</b></i></h6>
          <List className="budgetItem">
          {
            budgetItems.map((item) => {
              return (
                <ListItem className="item">
                  <input 
                    type="text" 
                    className="noboarder entry-name" 
                    value={item.name}></input>
                  <label className="money">$</label>
                  <input 
                    type="number" 
                    className="noboarder entry-amount" 
                    value={item.amount.toFixed(2)}></input>
                  <button 
                    className="delete-element"
                  ><DeleteForeverIcon/></button>
                </ListItem>
              );
            })
          }
          </List>
        </StyleItems>
      </Grid>
  )
}

export default ListBudgetItems;