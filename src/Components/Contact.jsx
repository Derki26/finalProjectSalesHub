import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './lib/context/auth-context';
import { useNavigate } from 'react-router-dom';
 //import "../CSS/contact.css";

const Contact = () => {
	const [data, setData] = useState({
		fullname: '',
		phone: '',
		email: '',
		message: '',
	});

	const navigate = useNavigate();
	const {currentUser} = useContext(AuthContext)

	useEffect(() => {
	if (currentUser){
		navigate("/")
	}
	}, [currentUser]);

	const inputEvent = (event) => {
		const { name, value } = event.target;
		setData((prevVal) => {
			return {
				...prevVal,
				[name]: value,
			};
		});
	};

	const formSubmit = (event) => {
		event.preventDefault();
		alert(
			`My name is ${data.fullname}. My phone number is ${data.phone}. My email id is ${data.email}. Here is what I want to say, ${data.message}.`,
		);
	};

	return (
		<div className="hero max-h-screen bg-white">
			<div>
				<div className="my-5 mt-20">
					<h1 className="text-center text-blue-500 text-3xl font-bold">
						Contact us!
					</h1>
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
					<div className="card-body">
						<div className="form-control">
							<form onSubmit={formSubmit}>
								<div className="form-group">
									<label>Full Name</label>
									<input
										type="text"
										className="form-control input input-bordered"
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
										className="form-control input input-bordered"
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
										className="form-control input input-bordered"
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
										className="form-control input input-bordered"
										name="message"
										value={data.message}
										onChange={inputEvent}
										cols="30"
										rows="4"
									></textarea>
								</div>
								<div>
									<button
										type="submit"
										className="btn btn-outline-primary mt-10 "
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Contact };
