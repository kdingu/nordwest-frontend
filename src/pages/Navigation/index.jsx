import React from "react";
import { Col, Container, Row, Button } from "reactstrap";

const Index = ({ toggle }) => {
  return (
    <div>
      <Container style={{ padding: "20px 0" }}>
        <Row>
          <Col>
            <img
              width="180px"
              alt="logo"
              src="http://edelmann-logistik.de/wp-content/uploads/2020/11/logo1.png"
            />
          </Col>
          <Col align="right">
            <Button
              onClick={toggle}
              style={{ backgroundColor: "#C43B39", border: "none" }}
            >
              Contact Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
