import React, { useState, useContext } from 'react';
import { personalCategories, businessCategories } from '../../utils/allCategories';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddForm, ListBudgetItems } from '.'

const budgetStyle = makeStyles((theme) => ({
  categoryTitles: {
    textAlign: 'center',

  },
}))


// const StyledBudget = styled.form`
// h1 {
//   text-align: center;
//   border-bottom-width: 5px;
//   border-bottom-style: double;
//   border-color: #eff7f7d2;
//   font-family: 'Rokkitt', serif;
//   font-size: 3rem;
// 	color: #ffffffdc;
// }

// .category {
// 	background-image: linear-gradient(to right,#0d3d42b0 , white);  
//   height: 10px;
// }

// form {
//   display: flexbox;
//   flex-wrap: wrap;
// }

// .budgetItems {
//   width: 100%;
//   margin-right: 0px;
// }

// `;

// add user name for header

export const BudgetView = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <h1>Budget</h1>
            {
              personalCategories.map(({ name, subCategories, startPercent}) => {
                return (
                      <Accordion expanded={expanded === name} onChange={handleExpandChange(name)}>
                        <AccordionSummary className="category" expandIcon={<ExpandMoreIcon />}>
                          <h4>{startPercent}% <span>{name}</span></h4>
                        </AccordionSummary>
                        <AccordionDetails>
                              <AddForm 
                                subCategories={subCategories} 
                                name={name} />
                              <ListBudgetItems className="budgetItem" 
                              title="Budgeted"
                              budgetItems={[
                                {
                                  id: 1,
                                  name: 'item1',
                                  amount: 23
                                },
                                {
                                  id: 2,
                                  name: 'item2',
                                  amount: 33.54
                                },
                                {
                                  id: 3,
                                  name: 'item3',
                                  amount: 33.44
                                },
                                {
                                  id: 4,
                                  name: 'item4',
                                  amount: 324
                                },

                              ]} />
                              <ListBudgetItems className="expenseItem" 
                              title="Expenses"
                              budgetItems={[
                                {
                                  id: 11,
                                  name: 'expense1',
                                  amount: 23.44
                                },
                                {
                                  id: 22,
                                  name: 'expense2',
                                  amount: 33.54
                                },
                                {
                                  id: 33,
                                  name: 'expense3',
                                  amount: 33.44
                                },
                                {
                                  id: 44,
                                  name: 'expense4',
                                  amount: 324.44
                                },

                              ]} />
                        </AccordionDetails>
                      </Accordion>
                );
              })
            }
    </>
  );
};

// export default BudgetView;