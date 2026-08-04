interface Props {
	title: string;
	year: string;
	description: string;
	demo: React.ReactNode;
}

export default function ExhibitCard({ title, year, description, demo, }: Props) {
	return (
		<article className="exhibit-card">
			<div className="exhibit-card-header">
				<div className="exhibit-card-header-head">
					<h1> {title} </h1>
					<h4> {year} </h4>
				</div>
				<div className="exhibit-card-header-body">
					<p> {description} </p>
				</div>
			</div>

			<section className="exhibit-demo"> {demo} </section>
		</article>
	);
}
