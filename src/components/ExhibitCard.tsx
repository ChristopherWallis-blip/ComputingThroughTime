interface Props {
	title: string;
	year: string;
	description: string;
	demo: React.ReactNode;
}

export default function ExhibitCard({ title, year, description, demo, }: Props) {
	return (
		<article className="exhibit-card">
			<header>
				<h2> {title} </h2>
				<h2> {year} </h2>
			</header>

			<p> {description} </p>
			<section className="exhibit-demo"> {demo} </section>
		</article>
	);
}
