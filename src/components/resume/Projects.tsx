interface ProjectProps {
	title: string;
	projectUrl: string;
	tasks: string[];
}

function Project({ title, projectUrl, tasks }: ProjectProps) {
	return (
		<div className="mb-3 mt-2">
			<h3 className="flex justify-between">
				<span className="font-bold">{title}</span> <span>{projectUrl}</span>
			</h3>
			<ul className="list-disc pl-5">
				{tasks.map((task) => (
					<li>{task}</li>
				))}
			</ul>
		</div>
	);
}

function Projects({
	projects,
	sectionTitle = "Projects",
}: {
	projects: ProjectProps[];
	sectionTitle?: string;
}) {
	return (
		<>
			<section>
				<h2 className="text-xl font-bold space-y-8">{sectionTitle}</h2>
				<hr className="border-delimsize border-black space-y-8" />
				<div>
					{projects.map((project) => (
						<Project
							title={project.title}
							projectUrl={project.projectUrl}
							tasks={project.tasks}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default Projects;
