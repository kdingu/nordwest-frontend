import React from "react";
import { Col, Container, Row } from "reactstrap";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#084274" }}>
      <Container>
        <Row>
          <Col align="middle">
            <div style={{ padding: "35px 0" }}>
              <img
                alt="logo"
                src="http://edelmann-logistik.de/wp-content/uploads/2020/01/logo2-320x92.png"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ borderTop: "1px solid white" }}></div>

      <Container>
        <Row style={{ padding: "8px 0" }}>
          <Col>
            <div
              style={{
                fontSize: "13px",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              Copyright by Thomas Edelmann Logistik. All rights reserved
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
