import { useState } from "react";

import { events } from "../data/Timeline";

function TimelinePanel() {
	const [selectedEvent, setSelectedEvent] = useState(events[0]);

	return (
		<section className="timeline-layout">
			<div className="timeline-container">
				<h1 className="timeline-container-header"> Timeline Events </h1>	

				{events.map((event) => (
					<div 
						key={event.id} 
						className={`timeline-event ${
							selectedEvent.title === event.title ? "active" : ""
						}`}
						onClick={() => setSelectedEvent(event)}
					>
						<h2> {event.title} </h2>
						<h3> {event.year} </h3>
					</div>
				))}
			</div>

			<aside className="timeline-details">
				<h1><strong> {selectedEvent.title} </strong></h1>
				<p> {selectedEvent.description} </p>
			</aside>
		</section>
	);
}


export default TimelinePanel;
