import React from "react";
import {Common} from "./Common";
import web from "./img/1651585.webp";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your education with"
        imgSrc={web}
        visit="/courses"
        btnName="Get Started"
      />
    </>
  );
}

export { Home };
