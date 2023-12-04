import { Header } from "./ui/Header";

export const Certificate = () => {
	return (
		<div className="hero min-h-screen bg-white">
		<div className="hero-content flex-col lg:flex-row-reverse">
		  <img src="img/hombre-certificado.avif" className="max-w-sm rounded-lg shadow-2xl" />
		  <div>
			<h1 className="text-primary text-5xl font-bold">Change your life in months, not years!</h1>
			<p className="py-6"             style={{
              fontFamily: "Avant Garde",
              fontWeight: 400,
              height: "109.438px",
            }}
			>We are recognized by multiple institutions for our academic quality,
			 affordability, and accessibility. Our commitment to excellence also helped us rank in the top 
			 10% of Niche.com’s best online schools in America. Earning your online information technology 
			 degree from a nonprofit university with this kind of recognition can help set you apart from 
			 others in your field.
			Tuition for all undergraduate, graduate, and doctoral programs has not increased in 9 years.
			 While many other online colleges have raised tuition, Liberty has been able to keep costs 
			 low as a nonprofit university.</p>
			
			 <Header
				name="Grow your education with"
				imgSrc="img/1651585.webp"
				visit="/courses"
				btnName="Get Started"
			/>

		  </div>
		</div>
	  </div>
	);
};
