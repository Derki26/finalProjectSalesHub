import React from "react";
import {Common} from "./Common";
import web from "/hombre-certificado.avif";


const About = () => {
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

export { About };