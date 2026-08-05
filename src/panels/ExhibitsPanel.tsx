import { useState } from "react";

import { exhibits } from "../data/Exhibits";
import ExhibitBar from "../components/ExhibitBar";
import ExhibitCard from "../components/ExhibitCard";

export default function ExhibitsPanel() {
	const [selectedExhibit, setSelectedExhibit] = useState(() => {
		const saved = localStorage.getItem("selectedExhibit");
		return saved ? Number(saved) : 0;
	});
	
	function selectExhibit(index: number) {
		localStorage.setItem("selectedExhibit", index.toString());
		setSelectedExhibit(index);
	}
	
	const currentExhibit = exhibits[selectedExhibit];

	return (
		<div className="exhibit-layout">
			<ExhibitBar
				exhibits={exhibits}
				selected={selectedExhibit}
				onSelect={selectExhibit}
			/>

			<ExhibitCard 
				title={currentExhibit.title}
				year={currentExhibit.year}
				description={currentExhibit.description}
				demo={currentExhibit.demo}
			/>
		</div>
	);
}
