export type TimelineItem = {
	title: string;
	content: string;
	date: string;
	category: {
		tag: string;
		color: string;
	};
	link?: {
		url: string;
		text: string;
	};
};

export const timeline: { [k: number]: TimelineItem } = [
	{
		title: "Started my journey",
		content: `I started my journey in the world of computers by learning Luau
			(Roblox's Lua dialect) to make games on Roblox. During that time, I realized several programming paradigms
			such as object-oriented programming and functional programming.`,
		date: "Around 2016",
		category: {
			tag: "Roblox",
			color: "bg-blue-500",
		},
	},
	{
		title: "Introduced to C/C++",
		content: `I was introduced to C and C++ during my first year of junior high school. I learned the basics of C and C++ during that time.
			After that, I started to learn more about C++ and started to make my own projects.
			One of my projects was a simple render engine that I made using C++ and OpenGL.`,
		date: "Early 2018",
		category: {
			tag: "C/C++",
			color: "bg-blue-500",
		},
	},
	{
		title: "Started learning Web Development",
		content: `I started learning web development in the late 2018. I learned HTML, CSS, and JavaScript/Typescript during that time.`,
		date: "Late 2018",
		category: {
			tag: "Web Development",
			color: "bg-blue-500",
		},
	},
	{
		title: "Started learning Python",
		content: `Since I was interested in machine learning, I started learning Python.
		It was simple yet powerful when to comes to data analysis and machine learning.`,
		date: "2019",
		category: {
			tag: "Python",
			color: "bg-blue-500",
		},
	},
	{
		title: "Competitive Programming",
		content: `I started competitive programming in 2020. I learned a handful of algorithms and data structures,
		varying from basic concepts to advanced ones during that time.`,
		date: "2020",
		category: {
			tag: "Competitive Programming",
			color: "bg-blue-500",
		},
	},
	{
		title: "Tinkering with Linux",
		content: `I started playing around with Linux distros in 2020.
		My first Linux distro was Ubuntu, then I moved to Manjaro Linux, and then to Arch Linux.
		During that time, I learned a lot about Linux and how the operating system interacts with the kernel.
		I also got into the world of Linux rice and started to customize my desktop environment.`,
		date: "2020",
		category: {
			tag: "Linux",
			color: "bg-blue-500",
		},
	},
	{
		title: "Started learning IC Design",
		content: `I started learning IC design in the early 2022.
		Although quite difficult and drastically different from the other fields I've learned, I still enjoyed it.
		I followed a self-teaching group on Discord and learned a lot about IC design during that time.
		In the end, I made a simple RISC-V CPU using Verilog (Synthesized with Xilinx ).`,
		date: "Early 2022",
		category: {
			tag: "IC Design",
			color: "bg-blue-500",
		},
		link: {
			url: "https://github.com/algasami/RV32i_Imp",
			text: "View on GitHub",
		},
	},
	{
		title: "NECC Excellence Award",
		content: `I was awarded the National English Composition Contest (NECC全國作文比賽) Excellence Award in the mid 2021.
		This award is given to the top ten of the participants in the contest, and I was one of them.
		I wrote an essay about the importance of ethics in the 21st century which was published in the NECC book.
		This shows my abilities in writing and critical thinking, including my abilities to express my ideas clearly and concisely in a foreign language.
		`,
		date: "2021",
		category: {
			tag: "NECC",
			color: "bg-blue-500",
		},
		link: {
			url: "https://web.tngs.tn.edu.tw/111entest/files/111%E5%8C%972%E5%8D%80%E5%BE%97%E7%8D%8E%E5%90%8D%E5%96%AE.pdf",
			text: "View on NECC Website",
		},
	},
	{
		title: "Preparing for GSAT",
		content: `I've been busy preparing for the General Scholastic Ability Test (GSAT) since 2022.
		This test is a standardized test that is used to determine the eligibility of students to enter the top high schools in Taiwan.
		I am currently studying for the test and I hope to get a good score.`,
		date: "2022",
		category: {
			tag: "GSAT",
			color: "bg-blue-500",
		},
	},
];
