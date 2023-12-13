import { Header } from '../Components/ui/Header';

export const About = () => {
	return (
	<div className="hero min-h-screen bg-white">
		<div className="hero-content flex-col lg:flex-row-reverse">
			<p className="flex w-full">
			        Salesforcehub is a convined effort of Salesoforce with it's
					partners in order to create a more userfriendly and
					effective environment people like you to learn the required
					skills to work with the Salesforce's technologies, we
					empower students to achieve their full potential through
					the power of Salesforce. 
                    <br />
                    We are a leading Salesforce
					partner, recognized for our top-tier performance, deep
					expertise, and unwavering commitment to customer
					satisfaction. Founded on a passion for innovation and a
					dedication to customer success, we have grown to become a
					trusted advisor to people like you that want to boost your
					career in Salesforce
					<br />
					We offer a comprehensive range of Salesforce services,
					including:
					<br />
					Courses: We offer basic courses for people who is struggling
					when starting their career in the Saleslforce environment
					<br />
					Consulting: We guide you through every step of your
					Salesforce journey, from your first clicks as a Salesforce
					admin to the most advanced points on your career.
				    <br />
					First steps into the real world: What is the most import
					thing after you get certified? To get experience! That's why
					we will help you out to get prepared and apply to your first
					job.
					<br />
					What sets us apart? Top Salesforce Consulting Partner: We
					are consistently recognized as one of the top Salesforce
					consulting partners globally, a testament to our exceptional
					customer satisfaction and proven results.
					<br />
					Our Approach: We believe that long-term partnerships are
					built on trust and mutual success. We prioritize
					understanding your learning goals and providing a consulting
					solution that align with your specific needs.
					<br />
					Measurable Results: We don't just talk about success; we
					demonstrate it. We track key metrics and share data-driven
					insights to showcase the tangible impact of our work.
					<br></br>
			</p>
				<Header 
					name=""
					imgSrc="petSalesforce.png"
					visit="/contact"
					btnName="Contact Now"
				/>
	        </div>	 			
	</div>	
		
	);

};
