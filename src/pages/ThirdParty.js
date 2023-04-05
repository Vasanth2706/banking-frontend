import React, { useState } from "react";
import DashBoardNav from "../components/DashBoardNav";
import { Container,Row,Col } from "reactstrap";
import ThirdPartyTable from "../components/ThirdPartyTable";
import AddThirdParty from "../components/AddThirdParty";

export default function ThiryParty() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <DashBoardNav />
      <Container fluid>
        <Row xs="1" md="2" className="g-4">
          <Col>
            <ThirdPartyTable />
          </Col>
          <Col>
            <AddThirdParty />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
