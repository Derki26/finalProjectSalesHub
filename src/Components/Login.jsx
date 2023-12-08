import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "./lib/firebase";


const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: ""
    
  });

  const { email, password } = formFields;

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value
      };  
    });
  };

  useEffect(() => {
      console.log(formFields);

  }, [formFields])

const navigate=useNavigate();
const handleSumit = async(event) =>{
  event.preventDefault();

  try{
    const userCredentials = await signInUser(email,password);
    if (userCredentials) {
      setFormFields({ email:"", password:""});
      navigate("/");
    }
  } catch(error) {
    console.log("Error signing in user", error.message);
  }
}

  return (
   
      <div className="hero min-h-screen bg-white bg-[url(Login_background.jpg)]">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-blue">Login now!</h1>
                <p className="py-6 text-blue">You're just a few clicks away from greatness.</p>
              </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body"   onSubmit={handleSumit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" value={email}   onChange={handleChange} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password"  className="input input-bordered" value={password} onChange={handleChange} />
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