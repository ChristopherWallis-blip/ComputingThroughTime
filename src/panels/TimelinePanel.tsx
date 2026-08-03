import { useState } from "react";

const events = [
	{
		year: "3000 BCE",
		title: "Early Counting Systems",
		description:
			"Humans use tally marks and counting tools to record quantities.",
	},
	{
		year: "300 BCE",
		title: "The Abacus",
		description:
			"The abacus provides a physical method for performing calculations.",
	},
	{
		year: "1642 CE",
		title: "Pascal's Calculator",
		description:
			"A mechanical device cpapable of performing arithmetic operations.",
	},
	{
		year: "1837 CE",
		title: "Analytical Engine",
		description:
			"Charles Babbage designs a programmable mechanical comoputer.",
	},
	{
		year: "1940s CE",
		title: "Electronic Computers",
		description:
			"Vacuum tube computers enable automated calculations at unprecidented scales.",
	},
];


function TimelinePanel() {
	const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

	return (
		<section clsssName="history-timeline">
			<h1> Timeline of Computation </h1>

			<div>
				{events.map((event) => (
					<article 
						key={event.year} 
						className="timeline-event"
						onClick={() => setSelectedEvent(event.year)}
					>
						<h2> {event.year} </h2>
						<h3> {event.title} </h3>

						{selectedEvent === event.year && (
							<p> {event.description} </p>
						)}
					</article>
				))}
			</div>
		</section>
	);
}


export default TimelinePanel;
