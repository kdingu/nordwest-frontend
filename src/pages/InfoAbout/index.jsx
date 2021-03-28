import React from "react";
import { Col, Container, Row } from "reactstrap";

const Index = () => {
  return (
    <div
      style={{
        padding: "80px 0",
        backgroundColor: "rgba(0,0,0,0.65)",
        backgroundImage:
          "url('http://edelmann-logistik.de/wp-content/uploads/2015/09/Transparent-background-with-dots.png')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Row>
          <Col align="right">
            <h2 style={{ color: "white" }}>UNSER UNTERNEHMEN</h2>
          </Col>
          <Col>
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "5px",
                padding: "40px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "white",
                fontWeight: 200,
              }}
            >
              <p>
                Das Transportunternehmen wurde 1956 von Wolfgang Edelmann in
                Bielefeld gegründet und wurde bis 1993 von ihm geführt.{" "}
              </p>
              <p>
                Im Jahr 1993 übernahm sein Sohn Thomas Edelmann die
                Geschäftsführung. Er führt das Unternehmen seit nunmehr 26
                Jahren erfolgreich in zweiter Generation.
              </p>
              <p>
                Neben einem modernen Fuhrpark, der auch den kommenden
                Umweltschutzauflagen gerecht wird, können wir uns auf gut
                ausgebildetes Personal mit langjähriger Berufserfahrung
                verlassen.
              </p>
              <p>
                Wir sind sehr stolz darauf, dass der Großteil unserer
                Mitarbeiter schon seit Jahrzehnten für uns tätig ist.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
