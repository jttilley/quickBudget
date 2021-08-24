import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { personalCategories, businessCategories } from '../utils/allCategories';

const BudgetView = () => {
  return (
    <div>
      <h1>Budget</h1>
      <Row>
        <Col>
          {
            personalCategories.map(({ name, subCategories, startPercent}) => {
              return (
                <div>
                  <h2>{name} {startPercent}%</h2>
                  <ul>
                  {
                    subCategories.map((sub) => {
                      return (
                        <li>{sub}</li>
                      );
                    })
                  }
                  </ul>
                </div>
              );
            })
          }
        </Col>
        <Col>
          {
            businessCategories.map(({ name, subCategories }) => {
              return (
                <div>
                  <h2>{name}</h2>
                  <ul>
                  {
                    subCategories.map((sub) => {
                      return (
                        <li>{sub}</li>
                      );
                    })
                  }
                  </ul>
                </div>
              );
            })
          }
        </Col>
      </Row>
    </div>
  );
};

export default BudgetView;