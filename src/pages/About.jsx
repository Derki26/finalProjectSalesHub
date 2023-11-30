import React from "react";
import Common from "./Common";
import web from "../src/images/img1.svg";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgSrc={web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
}

export default About;