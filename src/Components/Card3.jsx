import React from "react";
import { NavLink } from "react-router-dom";

 const Card3 = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgSrc}
            className="card-img-top"
            alt="webdev"
            height="175"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
            An "Illustrator developer" typically refers to 
            someone who specializes in developing extensions,
            scripts, or plugins for Adobe Illustrator. Adobe Illustrator 
            is a popular vector graphics logos, icons.
            </p>
            <NavLink to="/about" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card3};