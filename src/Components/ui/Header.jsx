/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Header = ({ name, visit, btnName, imgSrc }) => {
	return (
		<>
			<section
				id="header"
				className="container mx-auto md:flex items-center">
				<div className="pt-5 flex justify-center flex-col mx-auto w-fit order-2">
					<h1>
						{name}
						{/* <strong className="brand-name">LivDer</strong> */}
					</h1>
					{/* <h2 className="my-3">
					   We are a company focused on providing you with the correct support and guidance for you to boost your career in Salesforce.
					</h2> */}
					<div className="mt-3">
						<Link className="btn btn-primary" to={visit}>
							{btnName}
						</Link>
					</div>
				</div>
				<div className="order-1">
					<img src={imgSrc} className="object-cover" alt="home" />
				</div>
			</section>
		</>
	);
};
