import TallyCounter from "../exhibits/TallyExhibit";
import Abacus from "../exhibits/AbacusExhibit";
import RomanNumeralConverter from "../exhibits/RomanNumeralExhibit";
import BinaryConverter from "../exhibits/BinaryExhibit";

export interface Exhibit {
	id: string;
	title: string;
	year: string;
	description: string;
	demo: React.ReactNode;
}

export const exhibits: Exhibit[] = [
	{
		id: "tally",
		title: "Tally Marks",
		year: "≈ 30,000-40,000 BCE",
		description: `
			This exhibit demonstrates tally marks, an ancient counting system 
			used to record quantities through simple marks.
		`,
		demo: <TallyCounter />,
	},
	{
		id: "abacus",
		title: "Abacus",
		year: "≈ 2,300-2,700 BCE",
		description: `
			This exhibit demonstrates the Japanese soroban abacus, a precision 
			counting tool that uses one upper bead and four lower beads on each 
			place-value rod.
		`,
		demo: <Abacus />,
	},
	{
		id: "roman",
		title: "Roman Numerals",
		year: "≈ 800-900 CE",
		description: `
			Roman numerals were a numerical system used throughout the Roman Empire 
			and are still found today in clocks, book chapters, and historical records. 
			Unlike modern numbers, Roman numerals represent values through combinations 
			of symbols with rules for addition and subtraction.
		`,
		demo: <RomanNumeralConverter />,
	},
	{
		id: "binary",
		title: "Binary Systems",
		year: "1679 CE",
		description: `
			Binary is the language at the core of digital technology. While humans 
			typically count using ten digits, computers use a two-symbol system of 
			0s and 1s to store, process, and communicate information. This simple 
			system powers everything from calculators to modern computers.
		`,
		demo: <BinaryConverter />,
	},
];
