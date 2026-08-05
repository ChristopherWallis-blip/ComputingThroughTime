export interface TimelineEvent {
	id: number;
	year: string;
	title: string;
	description: string;
}

export const events: TimelineEvent[] = [
	{
		id: 0,
		year: "≈ 30,000-40,000 BCE",
		title: "Early Counting Systems",
		description: `
			Early humans used marks carved into bone, stone, and wood to record
			quantities. These simple symbols were one of the first methods of 
			representing information and laid the foundation for numerical systems.
			Tally marks represent one of the earliest examples of humans converting
			real-world information into symbols. This idea of encoding information
			is the foundation of all computation. Modern computers continue this same
			principle by representing information through patterns of bits, using
			a binary number system.
		`,
	},
	{
		id: 1,
		year: "≈ 2300-2700 BCE",
		title: "The Abacus",
		description: `
			The abacus was one of the earliest calculation devices. By moving beads
			along rods, users could perform arithmetic faster and more accurately than
			mental calculation alone. The abacus introduced the concept of a dedicated
			computational tool and helped humans reliabley for long time before being
			replaced.
		`,
	},
	{
		id: 2,
		year: "1642 CE",
		title: "Pascal's Calculator",
		description: `
			Created by Blaise Pascal, the Pascaline was an early mechanical calculator
			that used gears to automatically perform addition and subtraction. It
			demonstrated that machines could assist with mathematical tasks. The
			Pasculine proved that machines could perform calculations without
			requiring every step to be completed by a person. It became an important
			milestone toward modern automated computing.
		`,
	},
	{
		id: 3,
		year: "1837 CE",
		title: "Analytical Engine",
		description: `
			Charles Babbage designed the Analytical Engine as a programmable mechanical
			computer. It introduced ideas similar to modern computers, including memory,
			processing, and programmable instructions. Unlike earlier calculators that
			could only perform specific operations, the Analytical Engine was designed
			to be programmable using punched cards. Ada Lovelace write extensive notes
			about the machine and created an algorithm for calculating Bernoulli numbers,
			making her work one of the earliest examples of computer programming.
		`,
	},
	{
		id: 4,
		year: "1936 CE",
		title: "Turing Machine",
		description: `
			Alan Turing introduced the Turing Machine as a mathematical model of 
			computation. It showed how machines could process information by following
			a set of instructions. The Turing Machine provided the theoretical foundation
			for computer science by helping define what problems computers can solve and
			how algorithms operate.
		`,
	},
	{
		id: 5,
		year: "1947 CE",
		title: "The Transistor",
		description: `
			The invention of the transistor replaced bulky vacuum tubes with smaller,
			more reliable electronic switches. Transistors made modern computers smaller,
			faster, and more efficient. Billions of transistors now exist inside just a
			single modern processor.
		`,
	},
	{
		id: 6,
		year: "1971 CE",
		title: "Microprocessors",
		description: `
			The microprocessor placed the central processing unit onto a single chip. This
			breakthrough allowed computers to become small enough for personal devices like
			the phones commonly used today.
		`,
	},
];
