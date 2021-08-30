import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { personalCategories, businessCategories } from '../utils/allCategories';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

p {
	margin-right: 15px;
}

label {
  margin-right: 5px;
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
  const [expanded, setExpanded] = useState(false);

  const handleExpandChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAddItem = () => {

  };

  return (
    <>
      <h1>Budget</h1>
      <Row>
        <Col>
          {
            personalCategories.map(({ name, subCategories, startPercent}) => {
              return (
                <StyledBudget>
                  <Row className="row">
                    <Col>
                      <Accordion expanded={expanded === name} onChange={handleExpandChange(name)}>
                        <AccordionSummary className="category" expandIcon={<ExpandMoreIcon />}>
                          <h3>{name} <span>{startPercent}%</span></h3>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Col>
                            <Row>
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
                            </Row>
                            <Row>
                              <Col className="budgetItem">
                                <p>budget item</p>
                                <p>budget item</p>
                                <p>budget item</p>
                                <p>budget item</p>
                              </Col>
                              <Col className="expenseItem">
                                <p>expense item</p>
                                <p>expense item</p>
                                <p>expense item</p>
                                <p>expense item</p>
                              </Col>
                            </Row>
                          </Col>
                        </AccordionDetails>
                      </Accordion>
                    </Col>
                  </Row>
                </StyledBudget>
              );
            })
          }
        </Col>
      </Row>
    </>
  );
};

export default BudgetView;