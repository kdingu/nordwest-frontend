import React from "react";
import { Col, Container, Row } from "reactstrap";
import { RiMapPinRangeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";

const index = () => {
  return (
    <div
      style={{
        padding: "40px 0",
        backgroundImage:
          "url('http://edelmann-logistik.de/wp-content/uploads/2015/09/Transparent-background-with-dots.png')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.65)",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Row>
          <Col xs="12" md="6" lg="3">
            <div style={{ display: "flex" }}>
              <BiSupport color="white" size={40} style={{ marginRight: 23 }} />
              <div>
                <h5 style={{ fontSize: "16px", color: "#fff" }}>TELEFON</h5>
                <p style={{ fontSize: "13px", color: "#fff" }}>
                  Rufen Sie uns an! <br /> +49 (0)521 54362015
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div style={{ display: "flex" }}>
              <AiOutlineClockCircle
                color="white"
                size={40}
                style={{ marginRight: 23 }}
              />
              <div>
                <h5 style={{ fontSize: "16px", color: "#fff" }}>
                  ÖFFNUNGSZEITEN
                </h5>
                <p style={{ fontSize: "13px", color: "#fff" }}>
                  Mo-Do 8:00 Uhr – 18:00 Uhr <br />
                  Fr 8:00 Uhr – 16:00 Uhr
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div style={{ display: "flex" }}>
              <RiMapPinRangeFill
                color="white"
                size={40}
                style={{ marginRight: 23 }}
              />
              <div>
                <h5 style={{ fontSize: "16px", color: "#fff" }}>ANFAHRT</h5>
                <p style={{ fontSize: "13px", color: "#fff" }}>
                  Schlangenstraße 9 <br /> 33607 Bielefeld
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6" lg="3">
            <div style={{ display: "flex" }}>
              <AiOutlineMail
                color="white"
                size={40}
                style={{ marginRight: 23 }}
              />
              <div>
                <h5 style={{ fontSize: "16px", color: "#fff" }}>EMAIL</h5>
                <p style={{ fontSize: "13px", color: "#fff" }}>
                  Schreiben Sie uns! <br />
                  info@edelmann-logistik.de
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
