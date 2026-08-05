import type { Exhibit } from "../data/Exhibits";

interface Props {
	exhibits: { id: number; title: string; }[];
	selected: string;
	onSelect: (index: number) => void;
}

export default function ExhibitBar({ exhibits, selected, onSelect, }: Props) {
	return (
		<aside className="exhibit-bar">
			<h1> Exhibits </h1>

			{exhibits.map((exhibit, index) => (
				<button
					key={exhibit.id}
					className={selected === index ? "active" : ""}
					onClick={() => onSelect(index)}
				>
					{exhibit.title}
				</button>
			))}
		</aside>
	);
}
