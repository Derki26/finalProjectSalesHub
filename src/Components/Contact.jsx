import React, { useState } from "react";
import "../CSS/contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. My phone number is ${data.phone}. My email id is ${data.email}. Here is what I want to say, ${data.message}.`
    );
  };

  return (
    <>
    <div className="container" style={{ height: "100vh" }}>
    <div  style={{ backgroundImage: "url(/jobs-foliage.webp)" }}>
      <div className="my-5" >
        <h1 className="text-center">Contact We</h1>
      </div>
      <div className="container contact_div">
        <div className="row" >
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export { Contact };