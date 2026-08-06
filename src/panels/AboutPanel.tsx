export default function AboutPanel() {
	return (
		<section className="about-panel">
			<div className="about-card">
				<h1 className="about-title"> About This Project </h1>

				<div className="about-section">
					<h2> Course Information </h2>
					
					<p className="about-section-info">
						<strong> University: </strong> Appalachian State University 
					</p>
					<p className="about-section-info">
						<strong> Course: </strong> MAT 5125 - History of Mathematics 
					</p>
					<p className="about-section-info">
						<strong> Module: </strong> Final Project: Communication Section 
					</p>
				</div>

				<div className="about-section">
					<h2> Created By </h2>

					<p className="about-section-info">
						<strong> Name: </strong> Christopher Wallis 
					</p>
					<p className="about-section-info">
						<strong> Pronouns: </strong> They/Them 
					</p>
					<p className="about-section-info">
						<strong> Email: </strong> wallisct@appstate.edu 
					</p>
				</div>

				<div className="about-section">
					<h2> Project Overview </h2>

					<p>
						Computing Through Time was created to be an interactive 
						educational experience exploring the evolution of numerical 
						systems and computing technologies throughout history.
					</p>

					<p>
						The project demonstrates how humans developed methods
						of representing and processing information, beginning
						with early counting systems such as tally marks and
						abacuses, through symbolic systems like Roman numerals,
						and continuing into modern digital concepts such as
						binary.
					</p>

					<p>
						This project could definitely be extended to a further
						capacity if more time was alotted to development. It has
						the potential to be a great teaching tool for many students
						of different backgrounds. Some further time could be spent
						to not only extend the quality of each timeline entry,
						but to also add new features such as a resources page
						where a multitude of learning materials can be listed.
					</p>
				</div>
			</div>
		</section>
	);
}
