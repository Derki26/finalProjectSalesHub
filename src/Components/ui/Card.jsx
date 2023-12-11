/* eslint-disable react/prop-types */


// pass in an object with imgSrc, title, description, cta properties
export const Card = ({ course }) => {
	return (
		<>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={course.imgSrc} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{course.title}</h2>
					<p>{course.description}</p>
					<div className="card-actions justify-end">

					<div className="mt-3">
						<a
							className="btn btn-primary"
							href={course.href}
							target="_blank" // Abre el enlace en una nueva pestaña
							rel="noopener noreferrer"
						>
						{course.cta}
					</a>
            </div>
					</div>
				</div>
			</div>
		</>
	);
};
