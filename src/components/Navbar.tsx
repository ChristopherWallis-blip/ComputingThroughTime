type NavbarProps = {
	activePanel: string;
	setActivePanel: (panel: string) => void;
};



function Navbar({ activePanel, setActivePanel }: NavbarProps) {
	const titles: Record<string, string> = {
		home: "Computing Through Time {Home}",
		timeline: "Computing Through Time {Timeline}",
		exhibits: "Computing Through Time {Exhibits}",
		about: "Computing Through Time {About}",
	};

	return (
		<nav className="site-navbar">
			<h2 className="site-title"> {titles[activePanel]}</h2>

			<div>
				<button onClick={() => setActivePanel("home")}>
					Home
				</button>

				<button onClick={() => setActivePanel("timeline")}>
					Timeline
				</button>

				<button onClick={() => setActivePanel("exhibits")}>
					Exhibits
				</button>

				<button onClick={() => setActivePanel("about")}>
					About
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
