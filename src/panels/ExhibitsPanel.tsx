import { useState } from "react";

import { exhibits } from "../data/Exhibits";
import ExhibitBar from "../components/ExhibitBar";
import ExhibitCard from "../components/ExhibitCard";

export default function ExhibitsPanel() {
	const [selected, setSelected] = useState("tally");
	const exhibit = exhibits.find((e) => e.id === selected)!;

	return (
		<div className="exhibit-layout">
			<ExhibitBar
				exhibits={exhibits}
				selected={selected}
				onSelect={setSelected}
			/>

			<ExhibitCard 
				title={exhibit.title}
				year={exhibit.year}
				description={exhibit.description}
				demo={exhibit.demo}
			/>
		</div>
	);
}
