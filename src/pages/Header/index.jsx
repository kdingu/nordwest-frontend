import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const index = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          padding: "200px 0",
          backgroundImage:
            "url('http://edelmann-logistik.de/wp-content/uploads/2020/01/neu2-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Container>
          <Row>
            <Col xs="12" md="6">
              <p style={{ color: "#fff", fontSize: "21px" }}>
                Herzlich Willkommen bei
              </p>
              <img
                alt="tagline"
                src="http://edelmann-logistik.de/wp-content/uploads/2020/11/logo4.png"
              />
              <p style={{ color: "#fff", fontSize: "21px" }}>
                Wir sind Ihr Spezialist für Transporte aller Art!
              </p>
              <br />
              <Button
                size="sm"
                style={{ backgroundColor: "#0C60A9", padding: "5px 30px" }}
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default index;
