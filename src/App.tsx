import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import HomePanel from "./panels/HomePanel";
import TimelinePanel from "./panels/TimelinePanel";
import ExhibitsPanel from "./panels/ExhibitsPanel";
import AboutPanel from "./panels/AboutPanel";

import { useState } from "react";


function App() {
	const [activePanel, setActivePanel] = useState("home");

	return (
		<div className="app">
			<Hero />
			<Navbar 
				activePanel={activePanel}
				setActivePanel={setActivePanel}
			/>

			<main>
				{activePanel === "home" && (<HomePanel setActivePanel={setActivePanel} />)}
				{activePanel === "timeline" && <TimelinePanel />}
				{activePanel === "exhibits" && <ExhibitsPanel />}
				{activePanel === "about" && <AboutPanel />}
			</main>
		</div>
	);
}

export default App;
