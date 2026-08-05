import { useState } from "react";

interface RodState {
	top: boolean;
	bottom: number;
}

interface RodProps {
	value: RodState;
	place: number;
	onTopClick: () => void;
	onBottomClick: (index:number) => void;
}

function Rod({ value, place, onTopClick, onBottomClick, }: RodProps) {
	return (
		<div className="abacus-rod">
			<div className="abacus-rod-visible" />
			<div 
				className={value.top ? "abacus-bead top active" : "abacus-bead top"} 
				onClick={onTopClick}
			/>
			<div className="abacus-divider" />

			{[0, 1, 2, 3].map((index) => (
				<div
					key={index}
					className={index < value.bottom ? "abacus-bead active" : "abacus-bead"}
					onClick={() => onBottomClick(index)}
				/>
			))}
			<h2> {place} </h2>
		</div>
	);
}

export default function Abacus() {
	const [rods, setRods] = useState<RodState[]>([
		{ top: false, bottom: 0 },
		{ top: false, bottom: 0 },
		{ top: false, bottom: 0 },
		{ top: false, bottom: 0 },
	]);

	const placeValues = [1000, 100, 10, 1];

	function toggleTop(index:number) {
		const copy = [...rods];

		copy[index].top = !copy[index].top;
		setRods(copy);
	}

	function setBottom(index: number, bead: number) {
		const copy = [...rods];

		if (bead < copy[index].bottom) {
			copy[index].bottom = bead;
		} else {
			copy[index].bottom = bead + 1;
		}

		setRods(copy);
	}

	function reset() {
		setRods([
			{ top: false, bottom: 0 },
			{ top: false, bottom: 0 },
			{ top: false, bottom: 0 },
			{ top: false, bottom: 0 },
		]);
	}

	const total = rods.reduce(
		(sum, rod, index) => {
			const digit = (rod.top ? 5 : 0) + rod.bottom;
			return sum + digit * placeValues[index];
		},
		0
	);

	return (
		<div className="exhibit">
			<div className="exhibit-abacus-layout">
				<h1> Total: {total} </h1>
				<div className="exhibit-abacus-body">
					<div className="exhibit-abacus">
						{rods.map((rod, index) => (
							<Rod 
								key={index}
								value={rod}
								place={placeValues[index]}
								onTopClick={() => toggleTop(index)}
								onBottomClick={(bead) => setBottom(index, bead)}
							/>
						))}
					</div>
					<button onClick={reset}> Reset Current Model </button>
				</div>
			</div>
		</div>
	);
}
