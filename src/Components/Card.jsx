import React from "react";
import { NavLink } from "react-router-dom";

 const Card = (props) => {
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
            A "web developer" is a professional who specializes in 
            the development of web applications. A web developer creates
            and maintains websites and web applications, using a variety 
            of technologies and tools
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

export { Card};