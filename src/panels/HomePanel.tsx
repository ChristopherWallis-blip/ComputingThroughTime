interface HomePanelProps {
	setActivePanel: (panel: string) => void;
}

export default function HomePanel({ setActivePanel }: HomePanelProps) {
	return (
		<section className="home-panel">
			<div className="home-card">
				<h1 className="home-title"> Computing Through Time </h1>

				<p className="home-description">
					Explore the inventions, ideas, and number systems
					that shaped the history of computing. Discover how
					humans transformed simple counting tools into the
					digital systems that define the modern world.
				</p>

				<div className="home-actions">
					<button onClick={() => setActivePanel("timeline")}> Explore Timeline </button>
					<button onClick={() => setActivePanel("exhibits")}> View Exhibits </button>
				</div>
			</div>
		</section>
	);
}
