import { useState } from "react";

export default function Abacus() {
	const [columns, setColumns] = useState([0, 0, 0, 0]);
	const placeValues = [1000, 100, 10, 1];

	function increment(index:number) {
		const copy = [...columns];
		copy[index] = (copy[index] + 1) % 10;
		setColumns(copy);
	}

	const total = columns.reduce((sum, value, index) => 
		sum + value * placeValues[index], 0
	);

	return (
		<div className="exhibit"> 
			{columns.map((value, index) => (
				<div
					key={index}
					onClick={() => increment(index)}
					style={{
						cursor: "pointer",
						fontSize: "2rem",
						margin: "10px"
					}}
				>

					{placeValues[index]} :
						{"🟤".repeat(value)} {"⚪".repeat(9 - value)}
				</div>
			))}

			<h1> {total} </h1>
		</div>
	);
}
