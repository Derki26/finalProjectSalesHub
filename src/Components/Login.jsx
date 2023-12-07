import { useState } from "react";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
    
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
      `My email id is ${data.email}.`
    );
  };

  return (
    <div className="hero min-h-screen bg-white bg-[url(Login_background.jpg)]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue">Login now!</h1>
      <p className="py-6 text-blue">You're just a few clicks away from greatness.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline-primary mt-10 ">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    
    
  );
}

export { Login };