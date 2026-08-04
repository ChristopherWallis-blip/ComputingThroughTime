import { useState } from "react";

export default function TallyCounter() {
	const [count, setCount] = useState(0);

	const tally = Array.from({ length: count }, (_, i) => 
		(i + 1) % 5 == 0 ? "| " : "|"
	).join("");

	return (
		<div className="exhibit">
			<p style={{ fontSize: "2rem", letterSpacing: "4px" }}>
				{tally || "No marks yet"}
			</p>

			<h3> Total: {count} </h3>

			<button onClick={() => setCount(count + 1)}> Add </button>
			<button onClick={() => setCount(Math.max(0, count - 1))}> Remove </button>
		</div>
	);
}
