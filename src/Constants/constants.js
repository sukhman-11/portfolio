/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faX,
	faBars,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
	faReact,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	raspIcon,
	neoIcon,
	figmaIcon,
	pawsitivePrototype,
	calculator,
	memoryGame,
	avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	raspIcon,
	neoIcon,
	figmaIcon,
	avatar,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hello there, I'm so happy you are here! (:",

		"My name is Sukhman, I'm 20 and a third year computer science student based in Punjab, India. I have a strong passion for the technologies related to web development and UX.",

		"Outside of my regular activities, I'm into painting and baking whenever I have some free time. I'm also a huge music lover and enjoy playing chess for fun.",

		"I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
	],
};

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'skills',
		title: 'Skills',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const projects = [
	{
		name: 'Harvestify',
		description:'This project explores the applications of Artificial Intelligence (AI) and Machine Learning (ML) in agriculture, focusing on Python programming. It evaluates the diverse ways AI is utilized in agriculture, such as employing drones and robots equipped with sensors and tools for tasks like irrigation, weeding, and spraying.',
		image: memoryGame,
		// source_code_link: 'https://github.com/bl33h/artMemoryGame',
		// demo_link: 'https://arasarmemory.netlify.app/',
	},
	// {
	// 	name: 'Pawsitive',
	// 	description:
	// 		'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
	// 	image: pawsitivePrototype,
	// 	source_code_link: 'https://github.com/bl33h/pawsitive',
	// 	demo_link:
	// 		'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
	// },
	// {
	// 	name: 'Basic Calculator',
	// 	description:
	// 		'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.',
	// 	image: calculator,
	// 	source_code_link: 'https://github.com/bl33h/calculator',
	// 	demo_link: 'https://bl33hscalculator.netlify.app/',
	// },
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: 'html',
		title: 'HTML',
		icon: htmlIcon,
		description:
			'As a beginner, I have developed a solid understanding of HTML by creating structured and semantically correct web pages. I can efficiently utilize HTML tags and attributes to organize content and create user-friendly interfaces.'
	},
	{
		id: 'css',
		title: 'CSS',
		icon: cssIcon,
		description:
			'I have acquired foundational skills in CSS, allowing me to style and enhance the appearance of web pages. I am familiar with selectors, properties, and values, enabling me to customize layouts, typography, and color schemes to create visually appealing websites.'
	},
	{
		id: 'javascript',
		title: 'JavaScript',
		icon: jsIcon,
		description:
			'With my beginner-level JavaScript skills, I am capable of adding interactivity and dynamic elements to web pages. I can write basic scripts, manipulate the DOM, and handle events to create engaging user experiences.'
	},
	{
		id: 'react',
		title: 'React',
		icon: reactIcon,
		description:
			'I have started my journey into React and have gained familiarity with its component-based architecture. I am able to create reusable UI components, manage state effectively, and build responsive and interactive web applications.'
	},
	// {
	//   id: 'java',
	//   title: 'Java',
	//   icon: javaIcon,
	//   description:
	//     'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
	// },
	// {
	//   id: 'aws',
	//   title: 'Amazon Web Services',
	//   icon: awsIcon,
	//   description:
	//     'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
	// },
	// {
	//   id: 'figma',
	//   title: 'Figma',
	//   icon: figmaIcon,
	//   description:
	//   'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
	// },
	{
		id: 'git',
		title: 'Git',
		icon: gitIcon,
		description:
			'I have grasped the basic concepts of version control using Git. I can initialize repositories, stage and commit changes, create branches, and merge code. I understand the importance of Git for collaborative development and project management.'
	},
	{
		id: 'github',
		title: 'GitHub',
		icon: githubIcon,
		description:
			'I have started using GitHub as a beginner, utilizing it as a platform for hosting and sharing my code repositories. I am familiar with basic GitHub functionalities, such as creating repositories, pushing and pulling code, and collaborating with others using pull requests.'
	},
	// {
	//   id: 'psql',
	//   title: 'Postgresql',
	//   icon: psqlIcon,
	//   description:
	//     'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
	// },
	// {
	//   id: 'vite',
	//   title: 'Vite',
	//   icon: viteIcon,
	//   description:
	//     'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
	// },
	{
		id: 'py',
		title: 'Python',
		icon: pyIcon,
		description:
			'As a beginner in Python, I have learned the fundamentals of the language, including syntax, data types, and control structures. I can write basic scripts, manipulate strings and lists, and solve simple programming problems.'
	},
	{
		id: 'node',
		title: 'Node',
		icon: nodeIcon,
		description:
			'I have been introduced to Node.js and have a basic understanding of server-side JavaScript development. I am capable of building simple server applications, handling requests and responses, and integrating with databases.'
	},
	// {
	//   id: 'neo',
	//   title: 'Neo4j',
	//   icon: neoIcon,
	//   description:
	//     'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
	// },
	// {
	//   id: 'raspi',
	//   title: 'Raspberry Pi',
	//   icon: raspIcon,
	//   description:
	//     'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
	// },
	// {
	//   id: 'eslint',
	//   title: 'Eslint',
	//   icon: eslintIcon,
	//   description:
	//     'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
	// },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };