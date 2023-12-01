import React from "react";

const Certificate = () => {
    return (
      <div className="bg-cover bg-center" style={{backgroundImage: 'url(/test-bg.webp)'}} >
      <div className="hero-content text-center" > 
      
       <div className="header-img">
                  <img
                    src="hombre-certificado.avif"
                    className="img-fluid animated"
                    alt="home"
                  />
        </div>    
        <div className="max-w-md" style={{ height: "100vh" }} >
          <h1
            className="text-primary text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] mb-5 text-5xl font-bold"
            style={{
              fontFamily: "Avant Garde",
              fontSize: "48px",
              fontWeight: 600,
              height: "109.438px",
            }}
          >
            Change your life in months, not years
          </h1>

          <div className="mb-3">
            <div className="text-center lg:text-left" >
              
              <h1 className="text-primary text-5xl font-bold">
                Join the #1 pathway for high-growth tech careers!
              </h1>
              <div className="header-img">
              <img
                src="1651585.webp"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
   
          </div>
        </div>
      </div>
    </div>
      );
    };

export { Certificate };