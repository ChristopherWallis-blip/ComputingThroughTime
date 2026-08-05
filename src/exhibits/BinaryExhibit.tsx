import { useState } from "react";

export default function BinaryConverter() {
    const [number, setNumber] = useState(0);
    const binary = number.toString(2);

    return (
        <div className="exhibit binary-exhibit">
            <input
                type="number"
                min="0"
                value={number}
                onChange={(e) =>
                    setNumber(Number(e.target.value))
                }
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

            <p> {number} in binary = {binary} </p>
        </div>
    );
}
