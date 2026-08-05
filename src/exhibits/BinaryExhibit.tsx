import { useState } from "react";

export default function BinaryConverter() {
    const [number, setNumber] = useState("");
    const decimal = Number(number) || 0;
    const binary = decimal >= 1 && decimal <= 3999 ? decimal.toString(2) : "0";

    return (
        <div className="exhibit binary-exhibit">
            <h1 
				className={decimal >= 0 && decimal <= 3999 ? 
							"binary-exhibit-header" : 
							"binary-exhibit-header invalid"}
			> 
				Please type a number between 1 and 3999
			</h1>

			<input
                type="number"
                min="0"
				placeholder="0"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <div className="binary-display">
                {binary.split("").map((bit, index) => (
                    <span
                        key={index}
                        className={bit === "1" ? "bit active" : "bit"}
                    >
                        {bit}
                    </span>
                ))}
            </div>
        </div>
    );
}
