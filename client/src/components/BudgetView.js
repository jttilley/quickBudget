import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { personalCategories, businessCategories } from '../utils/allCategories';




const BudgetView = () => {
  return (
    <>
      <h1>Budget</h1>
      <Row>
      <Col className="accordion">
        {
          personalCategories.map(({ name, subCategories, startPercent}) => {
            return (
              <Row>
                  <h4>{name} {startPercent}%</h4>
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
            );
          })
        }
      </Col>
      <Col>
        {
          businessCategories.map(({ name, startPercent, subCategories }) => {
            return (
              <Row>
                <h4>{name} {startPercent}%</h4>
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
            );
          })
        }
      </Col>
      </Row>
    </>
  );
};

export default BudgetView;