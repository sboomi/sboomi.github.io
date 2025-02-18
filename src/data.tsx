import { JSX } from "react";
import {
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaGithub,
  FaDocker,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaDatabase,
  FaBrain,
  FaLanguage,
  FaFlask,
  FaBolt,
  FaChartLine,
  FaTable,
  FaCube,
  FaForward,
} from "react-icons/fa";

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

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Solar API Mock",
    year: 2025,
    description: "Mockup API of the famous Google Solar API",
    technologies: ["Python", "FastAPI"],
    githubUrl: "https://github.com/sboomi/solar-api-mock",
    status: "Ongoing",
    demoUrl: "",
  },
  {
    id: 2,
    title: "K-Means From Scratch",
    year: 2020,
    description:
      "Short demonstration of K-Means clustering algorithm from scratch",
    technologies: ["Python", "Numpy", "Pandas"],
    githubUrl: "https://github.com/sboomi/kmeansfromscratch",
    status: "Completed",
    demoUrl: "",
  },
  {
    id: 3,
    title: "Med Article Extractor",
    year: 2021,
    description: "A tool to extract medical articles from PubMed",
    technologies: ["Python", "BeautifulSoup"],
    githubUrl: "https://github.com/sboomi/med-article-extractor",
    status: "On hold",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Exploradome Tangram",
    year: 2020,
    description: "Recognizes shapes in a Tangram game",
    technologies: ["Python", "Numpy", "YOLOv3", "OpenCV"],
    githubUrl: "https://github.com/sboomi/exploradome_tangram",
    status: "Completed",
    demoUrl: "",
  },
  {
    id: 5,
    title: "Job offer extractor",
    year: 2021,
    description: "Extracts job offers from Indeed",
    technologies: ["Python", "BeautifulSoup", "MongoDB"],
    githubUrl: "https://github.com/sboomi/relevant_joboffers",
    status: "Completed",
    demoUrl: "",
  },
  {
    id: 6,
    title: "Neural network from scratch",
    year: 2020,
    description:
      "A project aiming to demonstrate how to build a neural network from scratch",
    technologies: ["Python", "Numpy"],
    githubUrl: "https://github.com/sboomi/neuralnetworkfromscratch",
    status: "Completed",
    demoUrl: "",
  },
  {
    id: 7,
    title: "ML Science Trend Analysis",
    year: 2020,
    description: "Algorithm to analyze machine learning science trends",
    technologies: ["Python", "Numpy", "Pytorch", "NLTK", "Spark NLP"],
    githubUrl: "https://github.com/sboomi/MLScienceTrend-Analysis",
    status: "On hold",
    demoUrl: "",
  },
  {
    id: 8,
    title: "ML Science Trend Client",
    year: 2020,
    description: "App for the analysis of machine learning science trends",
    technologies: ["Next.JS", "TypeScript", "FastAPI", "Python", "Docker"],
    githubUrl: "https://github.com/sboomi/ml-science-trends-client",
    status: "On hold",
    demoUrl: "",
  },
  // Add more projects as needed
];

export const skills = [
  {
    id: 1,
    category: "Programming",
    items: [
      { id: 101, name: "Python", icon: <FaPython /> },
      { id: 102, name: "TypeScript", icon: <FaJs /> },
      { id: 103, name: "JavaScript", icon: <FaJs /> },
      { id: 104, name: "Java", icon: <FaJava /> },
    ],
  },
  {
    id: 2,
    category: "Backend",
    items: [
      { id: 201, name: "FastAPI", icon: <FaBolt /> },
      { id: 202, name: "Flask", icon: <FaFlask /> },
      { id: 203, name: "Django", icon: <FaPython /> },
    ],
  },
  {
    id: 3,
    category: "Frontend",
    items: [
      { id: 301, name: "React", icon: <FaReact /> },
      { id: 302, name: "Next.js", icon: <FaForward /> },
    ],
  },
  {
    id: 4,
    category: "Databases",
    items: [
      { id: 401, name: "MongoDB", icon: <FaDatabase /> },
      { id: 402, name: "PostgreSQL", icon: <FaDatabase /> },
    ],
  },
  {
    id: 5,
    category: "CI/CD",
    items: [
      { id: 501, name: "GitHub Actions", icon: <FaGithub /> },
      { id: 502, name: "Azure DevOps", icon: <FaMicrosoft /> },
      { id: 503, name: "Docker", icon: <FaDocker /> },
      { id: 504, name: "Kubernetes", icon: <FaCube /> },
    ],
  },
  {
    id: 6,
    category: "Cloud",
    items: [
      { id: 601, name: "AWS", icon: <FaAws /> },
      { id: 602, name: "GCP", icon: <FaGoogle /> },
      { id: 603, name: "Azure", icon: <FaMicrosoft /> },
    ],
  },
  {
    id: 7,
    category: "Machine Learning",
    items: [
      { id: 701, name: "PyTorch", icon: <FaBrain /> },
      { id: 702, name: "Scikit-Learn", icon: <FaChartLine /> },
    ],
  },
  {
    id: 8,
    category: "Analysis",
    items: [
      { id: 801, name: "Pandas", icon: <FaTable /> },
      { id: 802, name: "NumPy", icon: <FaBrain /> },
    ],
  },
  {
    id: 9,
    category: "Languages",
    items: [
      { id: 901, name: "English", icon: <FaLanguage /> },
      { id: 902, name: "French", icon: <FaLanguage /> },
    ],
  },
];
