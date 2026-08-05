import { events } from "../data/Timeline";

import { useState } from "react";


export default function TimelinePanel() {
	const [selectedEvent, setSelectedEvent] = useState(() => {
		const saved = localStorage.getItem("selectedTimelineEvent");
		return saved ? Number(saved) : 0;
	});

	function selectEvent(index: number) {
		localStorage.setItem("selectedTimelineEvent", index.toString());
		setSelectedEvent(index);
	}

	const currentEvent = events[selectedEvent];

	return (
		<section className="timeline-layout">
			<div className="timeline-container">
				<h1 className="timeline-container-header"> Timeline Events </h1>	

				{events.map((event, index) => (
					<div 
						key={event.id} 
						className={`timeline-event ${selectedEvent === index ? "active" : ""}`}
						onClick={() => selectEvent(index)}
					>
						<h2> {event.title} </h2>
						<h3> {event.year} </h3>
					</div>
				))}
			</div>

			<aside className="timeline-details">
				<h1><strong> {currentEvent.title} </strong></h1>
				<p> {currentEvent.description} </p>
			</aside>
		</section>
	);
}
