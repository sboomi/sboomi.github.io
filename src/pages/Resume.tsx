import React, { useState } from "react";
import Layout from "../components/Layout";
import { resume, resumeFr } from "../data";
import Header from "../components/resume/Header";
import Skills from "../components/resume/Skills";
import Experiences from "../components/resume/Experiences";
import Projects from "../components/resume/Projects";
import Education from "../components/resume/Education";

const Resume: React.FC = () => {
  const [displayedResume, setDisplayedResume] = useState(resume);
  const [displayedLanguage, setDisplayedLanguage] = useState<"en" | "fr">("en");

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
        <div className="flex justify-start space-x-4 p-4">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              setDisplayedResume(resume);
              setDisplayedLanguage("en");
            }}
          >
            EN
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              setDisplayedResume(resumeFr);
              setDisplayedLanguage("fr");
            }}
          >
            FR
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-4 p-4">
        <div className="border-gray-500 border w-[210mm] min-h-[297mm] bg-white shadow-lg font-display">
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
