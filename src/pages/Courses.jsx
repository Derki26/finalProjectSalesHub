import { courses } from '../utils/data';
import { Card } from '../Components/ui/Card';

//import {SearchBar} from "../components/searchbar"
import { useState } from "react"



export const Courses = () => {
	//const [setSearch] = useState({ input: '' })
	

	return (
		<>
			
			{/* <div className="my-5">
				<h1 className="text-center">Courses</h1>

				<div className="md:container md:mx-auto">
					<div className="max-w-sm rounded-lg shadow-2xl ml-auto">
								
							<SearchBar setSearch={setSearch} />
						
					</div>
				</div>

			</div> */}
			<ul className="grid grid-cols-3 gap-4 place-items-center max-w-7xl mx-auto">
				{courses.map((course) => (
					<li key={course.title}>
						<Card course={course} />
					</li>
				))}
			</ul>
		</>
		
	);
};
