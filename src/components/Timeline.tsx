const eras = [
	"Tally Marks",
	"Abacus",
	"Mechanical Calculators",
	"Binary Computers",
];

function Timeline() {
	return (
		<section id="timeline">
			<h2> Timeline </h2>

			<ul>
				{eras.map((era) => (
					<li key={era}> {era} </li>
				))}
			</ul>
		</section>
	);
}

export default Timeline;
