import type { Resume } from "@/types";

export function formatResumeToMarkdown(
	resumeObject: Resume,
	lang: "en" | "fr",
): string {
	const { skills, languages, experiences, projects, education } = resumeObject;

	const skillsList = skills
		.map((skill) => `- **${skill.name}**: ${skill.description}`)
		.join("\n");

	const experiencesList =
		experiences
			?.map(
				(exp) => `
## ${exp.title} - ${exp.company} - ${exp.location}
### ${exp.startDate} - ${exp.endDate}
${exp.tasks.map((task) => `- ${task}`).join("\n")}`,
			)
			.join("\n") ||
		(lang === "en"
			? "No experiences available"
			: "Sans expérience professionelle");

	const projectsList =
		projects
			?.map(
				(proj) => `
## ${proj.title}
${proj.tasks}`,
			)
			.join("\n") || lang === "en"
			? "No personal project"
			: "Pas de projet personnel";

	const educationList = education
		.map((edu) => `- ${edu.school}, ${edu.degree}, ${edu.gradYear}`)
		.join("\n");

	const languagesList = languages
		? languages.map((lang) => `- ${lang.name}: ${lang.level}`).join("\n")
		: lang === "en"
			? "No languages other than English"
			: "Pas d'autre langage";

	return `# Shadi BOOMI

# ${lang === "en" ? "Skills" : "Compétences"}
${skillsList}

## ${lang === "en" ? "Languages" : "Langues"}
${languagesList}

# ${lang === "en" ? "Experiences" : "Expérience professionnelle"}
${experiencesList}

# ${lang === "en" ? "Projects" : "Projets"}
${projectsList}

# ${lang === "en" ? "Education" : "Formation"}
${educationList}
`;
}
