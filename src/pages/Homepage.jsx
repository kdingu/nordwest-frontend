import React, { useState } from "react";

import Navigation from "./Navigation";
import Header from "./Header";
import InfoContact from "./InfoContact";
import InfoServices from "./InfoServices";
import InfoAbout from "./InfoAbout";
import InfoPerk from "./InfoPerk";
import Footer from "./Footer";
import AvForm from "availity-reactstrap-validation/lib/AvForm";
import { ModalBody, ModalHeader, Modal, ModalFooter, Button } from "reactstrap";
import AvField from "availity-reactstrap-validation/lib/AvField";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSumbit = (e, v) => {
    console.log(v);
  };

  return (
    <div id="homepage">
      <Navigation toggle={toggle} />
      <Header toggle={toggle} />
      <InfoContact />
      <InfoServices />
      <InfoAbout />
      <InfoPerk />
      <Footer toggle={toggle} />

      <Modal isOpen={isOpen} toggle={toggle}>
        <AvForm onValidSubmit={handleSumbit}>
          <ModalHeader toggle={toggle}>Contact us</ModalHeader>
          <ModalBody>
            <AvField
              name="name"
              label="Name"
              type="text"
              errorMessage="Invalid name"
              required
            />

            <AvField
              name="email"
              label="Email"
              type="text"
              errorMessage="Invalid email"
              required
            />

            <AvField
              name="subject"
              label="Subject"
              type="text"
              errorMessage="Invalid subject"
              required
            />

            <AvField
              name="message"
              label="Message"
              type="textarea"
              errorMessage="Invalid message"
              required
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              Send
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    </div>
  );
};

export default Homepage;
