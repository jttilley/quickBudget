import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { personalCategories, businessCategories } from '../utils/allCategories';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const StyledBudget = styled.form`
h1 {
  text-align: center;
  border-bottom-width: 5px;
  border-bottom-style: double;
  border-color: #eff7f7d2;
  font-family: 'Rokkitt', serif;
  font-size: 3rem;
	color: #ffffffdc;
}

.save{
	background-color: rgb(213, 218, 213);
	border-radius: 5px;
}
.save:hover {
	background-color: #3e8e41;
	color: white;
  }

.under-expense {
	color: #66de34;
}

p {
	margin-right: 15px;
}

label {
  margin-right: 5px;
}

#accordion {
	width: 70%;
  margin: auto;
  margin-top: 30px;
}

.category {
	background-image: linear-gradient(to right,#0d3d42b0 , white);  
}

.noboarder {
	border: none;
}

.delete-element {
	background-color: white;
	border: none;
	color: red;
}

form {
  display: flexbox;
  flex-wrap: wrap;
}

`;



const BudgetView = () => {
  return (
    <>
      <h1>Budget</h1>
      <Row>
        <Col id="accordion">
          {
            personalCategories.map(({ name, subCategories, startPercent}) => {
              return (
                <StyledBudget>
                  <Row className="row">
                    <Col>
                        <h3 className="category">{name} {startPercent}%</h3>
                        <form>
                          <p>
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
                          </p>
                          <p>
                            <label>Amount: </label>
                            <input type="text" data-name={name} class="entry-amount"/>
                          </p>
                          <p>
                            <label>For: </label>
                            <select name="entry-type" data-name={name} class="entry-type">
                              <option value="Budgeting">Budgeting</option>
                              <option value="Expense">Expense</option>
                            </select>
                            <button data-name={name} class="save">Save</button>
                          </p>
                        </form>
                      </Col>
                  </Row>
                </StyledBudget>
              );
            })
          }
        </Col>
        {/* <Col>
          {
            businessCategories.map(({ name, startPercent, subCategories }) => {
              return (
                <StyledBudget>
                <Row className = "row">
                  <h3 className="category">{name} {startPercent}%</h3>
                  <ul>
                  {
                    subCategories.map((sub) => {
                      return (
                        <li>{sub}</li>
                      );
                    })
                  }
                  </ul>
              </Row>
              </StyledBudget>
              );
            })
          }
        </Col> */}
      </Row>
    </>
  );
};

export default BudgetView;