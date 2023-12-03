import { courses } from "../utils/data";
import { Card } from "../Components/ui/Card";

export const Courses = () => {
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Courses</h1>
			</div>
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
