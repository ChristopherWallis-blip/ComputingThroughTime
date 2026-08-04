import TallyCounter from "../exhibits/TallyExhibit";
import Abacus from "../exhibits/AbacusExhibit";

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
		description: "One of the earliest methods humans used to count",
		demo: <TallyCounter />,
	},
	{
		id: "abacus",
		title: "Abacus",
		year: "≈ 2,300-2,700 BCE",
		description: "A manual calculator using sliding beads.",
		demo: <Abacus />,
	},
];
