import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from 'reactstrap';
import { FaIcon } from 'react-icons';

function MyCard ({ subtitle1, title, subtitle2, desc, icon }) {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col xs="5" className="text-center">
              {/* <FaIcon icon={icon} size="3x" /> */}
            </Col>
            <Col xs="7">
              <CardSubtitle className="mb-2 text-muted">{subtitle1}</CardSubtitle>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle className="mt-2 mb-2 text-muted">{subtitle2}</CardSubtitle>
            </Col>
          </Row>
          <CardText className="mt-2">{desc}</CardText>
        </CardBody>
      </Card>
    );
  }

  export default MyCard

  
  
  
  
  
  