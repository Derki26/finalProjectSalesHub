import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div
        className="hero-content text-center"
        style={{ backgroundImage: "url(/jobs-foliage.webp)" }}
      >
        
        <img
                src="picture2.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
        <div className="max-w-md" style={{ height: "100vh" }}>
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
            <div className="text-center lg:text-left">
              <h1 className="text-primary text-5xl font-bold">
                Join the #1 pathway for high-growth tech careers!
              </h1>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src="picture1.jpg"
                    className="img-fluid animated"
                    alt="home"
                  />
              </div>    
             
              
            </div>
            <section
              id="home"
              className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8"
            >
              <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
                <div className="flex flex-col gap-8">
                  <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
                    Join the #1 pathway for high-growth tech careers!{" "}
                    <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block ">
                      Courses
                    </span>
                  </h1>
                  <p className="text-gray-500 text-2xl leading-[2.5rem]">
                    Find your purpose Explore our career paths We invest in our
                    students by constantly monitoring the job market and
                  </p>
                  <p className="text-gray-500 text-2xl leading-[2.5rem]">
                    cutting-edge technologies and revising our curriculum to
                    reflect the most in-demand skills.
                  </p>
                  <p className="text-gray-500 text-2xl leading-[2.5rem]">
                    We have built our program around the most effective learning
                    styles – pairing our curriculum with hands-on experiences to
                    prepare learners to be tomorrow’s leaders in technology
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
                        Get Started
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export { Hero };
