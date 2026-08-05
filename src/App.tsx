import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import HomePanel from "./panels/HomePanel";
import TimelinePanel from "./panels/TimelinePanel";
import ExhibitsPanel from "./panels/ExhibitsPanel";
import AboutPanel from "./panels/AboutPanel";

import { useState } from "react";




export default function App() {
	const [activePanel, setActivePanel] = useState(() => {
			return localStorage.getItem("activePanel") || "home";
	});

	function changePanel(panel: string) {
		localStorage.setItem("activePanel", panel);
		setActivePanel(panel);
	}

	return (
		<div className="app">
			<Hero />
			<Navbar 
				activePanel={activePanel}
				setActivePanel={changePanel}
			/>

			<main>
				{activePanel === "home" && (<HomePanel setActivePanel={changePanel} />)}
				{activePanel === "timeline" && <TimelinePanel />}
				{activePanel === "exhibits" && <ExhibitsPanel />}
				{activePanel === "about" && <AboutPanel />}
			</main>
		</div>
	);
}
