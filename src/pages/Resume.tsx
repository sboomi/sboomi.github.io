import Layout from "@/components/Layout";
import Notification from "@/components/Notification";
import Education from "@/components/resume/Education";
import Experiences from "@/components/resume/Experiences";
import Header from "@/components/resume/Header";
import Projects from "@/components/resume/Projects";
import Skills from "@/components/resume/Skills";
import { Button } from "@/components/ui/button";
import { resume, resumeFr } from "@/data";
import { formatResumeToMarkdown } from "@/lib/formatter";
import React, { useState, useRef } from "react";
import { LuDownload } from "react-icons/lu";
import generatePDF from "react-to-pdf";

const Resume: React.FC = () => {
	const targetRef = useRef(null);

	const [displayedResume, setDisplayedResume] = useState(resume);
	const [displayedLanguage, setDisplayedLanguage] = useState<"en" | "fr">("en");
	const [timeoutId, setTimeoutId] = useState<number | null>(null);
	const [notificationState, setNotificationState] = useState({
		isVisible: false,
		opacity: 0,
		message: "",
	});

	const handleOnClick = () => {
		const now = new Date();

		const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}${now.getHours().toString().padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now.getSeconds().toString().padStart(2, "0")}`;

		generatePDF(targetRef, { filename: `CV_Shadi_Boomi_${formattedDate}.pdf` });
	};

	const dismissNotification = () => {
		setNotificationState((prev) => ({ ...prev, opacity: 0 }));

		// Hide completely after transition completes
		setTimeout(() => {
			setNotificationState((prev) => ({ ...prev, isVisible: false }));
		}, 300); // Match this with CSS transition duration
	};

	const handleOnCopyPasted = () => {
		// Gets the resume in markdown format
		navigator.clipboard.writeText(
			formatResumeToMarkdown(displayedResume, displayedLanguage),
		);

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		setNotificationState({
			isVisible: true,
			opacity: 0,
			message: "Copied to clipboard!",
		});

		setTimeout(() => {
			setNotificationState((prev) => ({ ...prev, opacity: 1 }));
		}, 10);

		const foundTimeoutId = setTimeout(() => {
			dismissNotification();
		}, 3000);

		setTimeoutId(foundTimeoutId);
	};

	const sectionTitles = {
		en: {
			skills: "Skills",
			experiences: "Experiences",
			projects: "Projects",
			education: "Education",
		},
		fr: {
			skills: "Compétences",
			experiences: "Expérience professionelle",
			projects: "Projets",
			education: "Formation",
		},
	};

	return (
		<Layout>
			<div>
				<h1 className="text-xl font-bold transition-colors">Resume</h1>
				<div className="flex justify-between space-x-4 p-4 items-center">
					<div>
						<Button
							onClick={() => {
								setDisplayedResume(resume);
								setDisplayedLanguage("en");
							}}
							variant="outline"
						>
							EN
						</Button>
						<Button
							onClick={() => {
								setDisplayedResume(resumeFr);
								setDisplayedLanguage("fr");
							}}
							variant="outline"
						>
							FR
						</Button>
					</div>
					<div className="flex flex-col items-end space-y-1">
						<span className="text-sm font-medium px-5">
							Download PDF or copy
						</span>
						<div className="flex space-x-2">
							<Button onClick={() => handleOnClick()} variant="outline">
								<LuDownload className="w-3.5 h-3.5 me-2" />
								Download
							</Button>
							<Button onClick={() => handleOnCopyPasted()} variant="outline">
								Copy to clipboard
							</Button>
							<Notification
								message={notificationState.message}
								show={notificationState.isVisible}
								opacity={notificationState.opacity}
								onDismiss={dismissNotification}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Resume */}
			<div className="flex justify-center space-x-4 p-4 border-gray-500">
				<div
					ref={targetRef}
					className="border w-[210mm] min-h-[297mm] bg-white shadow-lg font-display"
				>
					<div className="tracking-tight flex flex-col space-y-3.5 m-8 text-sm">
						{displayedResume.languages ? (
							<Header languages={displayedResume.languages} />
						) : (
							<Header languages={[]} />
						)}

						<Skills
							skills={displayedResume.skills}
							sectionTitle={sectionTitles[displayedLanguage].skills}
						/>

						{displayedResume.experiences &&
						displayedResume.experiences.length > 0 ? (
							<Experiences
								experiences={displayedResume.experiences}
								sectionTitle={sectionTitles[displayedLanguage].experiences}
							/>
						) : null}

						{displayedResume.projects && displayedResume.projects.length > 0 ? (
							<Projects
								projects={displayedResume.projects}
								sectionTitle={sectionTitles[displayedLanguage].projects}
							/>
						) : null}

						<Education
							education={displayedResume.education}
							sectionTitle={sectionTitles[displayedLanguage].education}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Resume;
