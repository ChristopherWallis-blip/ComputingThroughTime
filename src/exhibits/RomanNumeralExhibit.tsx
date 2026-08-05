import { useState } from "react";

const romanValues = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
];

function convertToRoman(num: number) {
    let result = "";

    for (const item of romanValues) {
        while (num >= item.value) {
            result += item.symbol;
            num -= item.value;
        }
    }

    return result;
}

export default function RomanNumeralConverter() {
    const [number, setNumber] = useState("");
	const decimal = Number(number) || 0;
    const roman = decimal >= 1 && decimal <= 3999 ? convertToRoman(decimal) : "";

    return (
        <div className="exhibit roman-exhibit">
			<h1 
				className={decimal >= 0 && decimal <= 3999 ? 
							"roman-exhibit-header" : 
							"roman-exhibit-header invalid"}
			> 
				Please type a number between 1 and 3999 
			</h1>
            <input
                type="number"
                min="0"
				max="3999"
				placeholder="0"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <div className="roman-display"> {roman} </div>
        </div>
    );
}
