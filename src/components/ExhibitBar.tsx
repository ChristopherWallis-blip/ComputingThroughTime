import type { Exhibit } from "../data/Exhibits";

interface Props {
	exhibits: Exhibit[];
	selected: string;
	onSelect: (id: string) => void;
}

export default function ExhibitBar({ exhibits, selected, onSelect, }: Props) {
	return (
		<aside className="exhibit-bar">
			<h1> Exhibits </h1>

			{exhibits.map((exhibit) => (
				<button
					key={exhibit.id}
					className={selected === exhibit.id ? "active" : ""}
					onClick={() => onSelect(exhibit.id)}
				>
					{exhibit.title}
				</button>
			))}
		</aside>
	);
}
