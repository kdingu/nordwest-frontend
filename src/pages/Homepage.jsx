import React from "react";

import Header from "./Header";
import InfoContact from "./InfoContact";
import InfoServices from "./InfoServices";
import InfoAbout from "./InfoAbout";
import InfoPerk from "./InfoPerk";

const Homepage = () => {
  return (
    <div id="homepage">
      {/* <Navigation /> */}
      <Header />
      <InfoContact />
      <InfoServices />
      <InfoAbout />
      <InfoPerk />
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
