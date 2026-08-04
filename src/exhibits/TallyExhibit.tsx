import { useState } from "react";

export default function TallyCounter() {
	const [count, setCount] = useState(0);

	const groups = Math.floor(count / 5);
	const remainder = count % 5;
	
	return (
		<div className="exhibit">
			<h1> Total: {count} </h1>

			<div className="exhibit-tallies-modify">
				<h2> Add </h2>

				<button onClick={() => setCount(count + 1)}>  1  </button>
				<button onClick={() => setCount(count + 5)}>  5  </button>
				<button onClick={() => setCount(count + 25)}> 25 </button>
				<button onClick={() => setCount(count + 50)}> 50 </button>
				<button onClick={() => setCount(count + 100)}> 100 </button>
			</div>
			<div className="exhibit-tallies-modify">
				<h2> Subtract </h2>

				<button onClick={() => setCount(Math.max(0, count - 1))}>  1  </button>
				<button onClick={() => setCount(Math.max(0, count - 5))}>  5  </button>
				<button onClick={() => setCount(Math.max(0, count - 25))}> 25 </button>
				<button onClick={() => setCount(Math.max(0, count - 50))}> 50 </button>
				<button onClick={() => setCount(Math.max(0, count - 100))}> 100 </button>
			</div>

			<div className="exhibit-tallies">
				{Array.from({ length: groups }, (_, i) => (
					<div className="tally-group" key={i}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span className="tally-slash"></span>
					</div>
				))}

				{Array.from({ length: remainder }, (_, i) => (
					<span className="tally-single" key={i}></span>
				))}
			</div>
		</div>
	);
}
