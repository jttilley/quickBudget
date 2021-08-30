import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { personalCategories, businessCategories } from '../../utils/allCategories';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddForm from './AddForm'
import ListBudgetItems from './ListBudgetItems'

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

.category {
	background-image: linear-gradient(to right,#0d3d42b0 , white);  
  height: 10px;
}

form {
  display: flexbox;
  flex-wrap: wrap;
}

.budgetItems {
  width: 100%
  margin-right: 0;
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
                  <Row>
                    <Col>
                      <Accordion expanded={expanded === name} onChange={handleExpandChange(name)}>
                        <AccordionSummary className="category" expandIcon={<ExpandMoreIcon />}>
                          <h4>{name} <span>{startPercent}%</span></h4>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Col className="budgetItems">
                            <Row>
                              <AddForm subCategories={subCategories} name={name} />
                            </Row>
                            <Row>
                              <ListBudgetItems className="budgetItem" 
                              title="Budgeting"
                              budgetItems={[
                                {
                                  name: 'item1',
                                  amount: 23
                                },
                                {
                                  name: 'item2',
                                  amount: 33.54
                                },
                                {
                                  name: 'item3',
                                  amount: 33.44
                                },
                                {
                                  name: 'item4',
                                  amount: 324
                                },

                              ]} />
                              <ListBudgetItems className="expenseItem" 
                              title="Expenses"
                              budgetItems={[
                                {
                                  name: 'expense1',
                                  amount: 23.44
                                },
                                {
                                  name: 'expense2',
                                  amount: 33.54
                                },
                                {
                                  name: 'expense3',
                                  amount: 33.44
                                },
                                {
                                  name: 'expense4',
                                  amount: 324.44
                                },

                              ]} />
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