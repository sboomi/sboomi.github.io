import { JSX } from "react";

export interface ProjectType {
	id: number;
	title: string;
	year: number;
	description: string;
	technologies: string[];
	githubUrl: string;
	status: "Ongoing" | "Completed" | "On hold";
	demoUrl: string;
}

export interface SkillItemProps {
	id: number;
	name: string;
	icon: JSX.Element;
}

interface Skill {
	name: string;
	description: string;
}

interface Language {
	name: string;
	level: string;
}

interface Experience {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	tasks: string[];
}

interface Project {
	title: string;
	projectUrl: string;
	tasks: string[];
}

interface Education {
	school: string;
	degree: string;
	gradYear: string;
}

export interface Resume {
	skills: Skill[];
	languages?: Language[];
	experiences?: Experience[];
	projects?: Project[];
	education: Education[];
}
