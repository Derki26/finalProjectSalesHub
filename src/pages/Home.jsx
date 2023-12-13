import { Certificate } from '../Components/Certificate';
import { Information } from '../Components/Information';
import { Header } from '../Components/ui/Header';
import { About } from './About';
import { Team } from './Team';


const Home = () => {
	return (
		<>
			<Header
				name="Grow your education with SalesforceHub"
				imgSrc="team.jpg"
				visit="/courses"
				btnName="Get Started"
			/>
			<div className="container flex justify-center mx-auto md:flex items-center">
				<h1 className="text-blue-500 text-5xl font-bold">
					Change your life in months, not years!
					<br>
					</br>
				</h1>
			</div>
			<div className="flex flex-col w-full border-opacity-50">
			<div className="grid h-20 card  rounded-box place-items-center"></div>
			
			</div>
			
			<About/>
			<Team/>
		</>
		
	);
};

export { Home };
