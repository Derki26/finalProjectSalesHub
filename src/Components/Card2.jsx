import React from "react";
import { NavLink } from "react-router-dom";

 const Card2 = (props) => {
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
            <p className="card-text" >
            A Java developer is a professional who specializes
            in programming using the Java programming language. 
            Java is a versatile and widely-used programming language
            that is known for its portability.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export { Card2};