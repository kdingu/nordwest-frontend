import React from "react";
import { Col, Container, Row } from "reactstrap";

const Index = () => {
  return (
    <div style={{ padding: "80px 0 160px" }}>
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "right" }}>
              WIR ACHTEN AUF UNSEREN CO2 FUSSABDRUC K
            </h2>
          </Col>
          <Col>
            <div style={{ color: "rgba(0,0,0,0.65)", fontWeight: "200" }}>
              <p>
                Unser Unternehmen und unsere Fahrer achten stets auf eine
                umweltfreundliche Ausführung aller Transporte.
              </p>
              <p>
                Wir vermeiden umweltbelastende Fahrweisen und achten stets auf
                unseren CO2 Fußabdruck.
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
