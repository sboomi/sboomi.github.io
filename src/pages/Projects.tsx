import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data";
import type { ProjectType } from "@/types";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }: { project: ProjectType }) => {
	return (
		<div className="bg-white dark:bg-gray-900 dark:border-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
			<div className="flex justify-between items-center mb-1">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
					{project.title}
				</h1>
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
				>
					<FaGithub />
				</a>
			</div>
			<div className="text-gray-600 dark:text-gray-400 mb-1">
				{project.description}
			</div>
			<div className="text-gray-400 dark:text-gray-600 text-xs mb-3">
				{project.year}
			</div>
			<div className="flex flex-wrap gap-2">
				{project.technologies.map((tech) => (
					<Badge key={tech} variant="secondary">
						{tech}
					</Badge>
				))}
			</div>
		</div>
	);
};

const ProjectListItem = ({ project }: { project: ProjectType }) => {
	const greenStyle =
		"inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset";
	const yellowStyle =
		"inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset";

	return (
		<li className="flex justify-between gap-x-6 py-5">
			<div className="flex min-w-0 gap-x-4">
				<div className="min-w-0 flex-auto">
					<div className="mt-1 flex items-center gap-x-1.5">
						<p className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
							{project.title}
						</p>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
						>
							<FaGithub />
						</a>
					</div>
					<p className="mt-1 truncate text-xs/5 text-gray-500 dark:text-gray-400">
						{project.description}
					</p>
					<div className="mt-1 flex space-x-4">
						{project.technologies.map((tech) => (
							<Badge key={tech} variant="secondary">
								{tech}
							</Badge>
						))}
					</div>
				</div>
			</div>

			<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
				<p className="text-sm/6 text-gray-900 dark:text-gray-100">
					{project.year}
				</p>
				<div className="mt-1 flex items-center gap-x-1.5">
					<p
						className={
							project.status === "Completed" ? greenStyle : yellowStyle
						}
					>
						{project.status}
					</p>
				</div>
			</div>
		</li>
	);
};

const Projects: React.FC = () => {
	const ongoingProjects = projects
		.filter((project) => project.status === "Ongoing")
		.map((project) => <ProjectCard key={project.id} project={project} />);

	const archivedProjects = projects
		.filter((project) => project.status !== "Ongoing")
		.map((project) => <ProjectListItem key={project.id} project={project} />);

	return (
		<Layout>
			<div className="py-12 px-4 max-w-6xl mx-auto">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
					Current Projects
				</h1>
				<div className="grid md:grid-cols-2 gap-6 mb-12">{ongoingProjects}</div>

				<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
					Past Projects
				</h1>
				<ul className="divide-y divide-gray-100">{archivedProjects}</ul>
			</div>
		</Layout>
	);
};

export default Projects;
