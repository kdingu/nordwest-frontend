import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BiPackage } from "react-icons/bi";
import { ImTruck } from "react-icons/im";
import { MdLocalCarWash } from "react-icons/md";
import { SiCodesandbox } from "react-icons/si";
import { TiMediaFastForward } from "react-icons/ti";

const MiniCard = ({ title, icon }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: "5px",
        backgroundColor: "#fff",
        padding: "20px 0 60px 20px",
        width: "100%",
        marginBottom: "1rem",
        boxShadow: "0px 1px 2px rgba(0,0,0,0.2)",
        display: "flex",
      }}
    >
      {icon}
      <h5 style={{ marginTop: "10px", fontSize: "16px", color: "#444444" }}>
        {title}
      </h5>
    </div>
  );
};

const Index = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      <Container>
        <Row>
          <Col xs="12" lg="4">
            <h2 style={{ marginBottom: "26px" }}>DIENSTLEISTUNGEN</h2>
          </Col>

          <Col xs="12" md="6" lg="4">
            <MiniCard
              title="STÜCKGUT NATIONAL"
              icon={
                <ImTruck
                  color="#0C60A9"
                  size={40}
                  style={{ marginRight: 23 }}
                />
              }
            />
            <MiniCard
              title="STÜCKGUT INTERNATIONAL"
              icon={
                <ImTruck
                  color="#0C60A9"
                  size={40}
                  style={{ marginRight: 23 }}
                />
              }
            />
            <MiniCard
              title="CONTAINER LOGISTIK"
              icon={
                <SiCodesandbox
                  color="#0C60A9"
                  size={40}
                  style={{ marginRight: 23 }}
                />
              }
            />
          </Col>

          <Col xs="12" md="6" lg="4">
            <MiniCard
              title="FILIALLOGISTIK"
              icon={
                <MdLocalCarWash
                  color="#0C60A9"
                  size={40}
                  style={{ marginRight: 23 }}
                />
              }
            />
            <MiniCard
              title="KÜHLTRANSPORTE"
              icon={
                <BiPackage
                  color="#0C60A9"
                  size={40}
                  style={{ marginRight: 23 }}
                />
              }
            />
            <MiniCard
              title="EXPRESS"
              icon={
                <TiMediaFastForward
                  color="#0C60A9"
                  size={40}
                  style={{ marginRight: 23 }}
                />
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
