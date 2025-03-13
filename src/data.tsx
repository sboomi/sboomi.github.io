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
import { ProjectType, Resume } from "./types";

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

export const resume: Resume = {
  skills: [
    { name: "Programming Languages", description: "Python, JavaScript" },
    {
      name: "Data and Machine Learning",
      description: "Pandas, Pytorch, Pyspark",
    },
    { name: "Databases", description: "SQL (PostgreSQL), MongoDB " },
    {
      name: "Web frameworks",
      description: "FastAPI, Django, React.JS, NextJS",
    },
    { name: "CI/CD tools", description: " Git, Docker, Kubernetes" },
    { name: "Cloud", description: "GCP Azure AWS" },
  ],
  languages: [
    {
      name: "French",
      level: "Mother tongue",
    },
    {
      name: "English",
      level: "Fluent",
    },
  ],
  experiences: [
    {
      title: "Data Engineer",
      company: "Engie GEMS",
      location: "Brussels, BE",
      startDate: "Nov 2022",
      endDate: "April 2024",
      tasks: [
        "Rebuilt the common infrastructure of 20 dashboards in Flask for Short Term Trading for a better maintenance and expansion of the app system, using Kubernetes and Azure Pipelines",
        "Added Python scripts to retrieve and store data from various time series for the power market to the existing task manager for analysis, with an asynchronous loop, making the process 100 times faster",
        "Migrated task automation and storage to AWS to develop a more efficient methodology for complex metadata time series resulting in more appropriate key partitioning",
        "Improved dashboard performances by adding displaying features for European gas data analysis, using Pandas and Flask",
        "Repaired 10% of accumulated technical debt over temporal series' database client",
        "Refactored Norwegian gas outage messages' interpreter to make it work on the current and legacy messages in order to obtain the same transformed result",
      ],
    },
    {
      title: "Python Software Engineer",
      company: "Haulogy",
      location: "Liège, BE",
      startDate: "Jun 2022",
      endDate: "Sept 2022",
      tasks: [
        "Initialized a module for the extension of a power management software solution to validate input parameters for a CSV file, via Pandas and Pydantic",
        "Improved the application manager for power market operations by adding functionality to parsers, on core functions and web adapters on FastAPI",
      ],
    },
    {
      title: "Data Scientist",
      company: "DISAITEK",
      location: "Paris, FR",
      startDate: "Oct 2020",
      endDate: "Oct 2021",
      tasks: [
        "Gathered screenshots on Google Maps for a model that detects the presence of illegal discharges, which allowed it to train on high-resolution images",
        "Initialized Pytorch detection model of regions between radar and satellite images, accuracy greater than 90% for land, rivers and forests",
        "Created a fullstack application with Django and NextJS that implements JWT authentication to monitor the probability and evolution of illegal landfills in the Val d'Oise on an interactive map",
        "Overtook Spacenet challenge to detect buildings using optical spectral signatures in the perspective of using satellite images for future projects of the company",
      ],
    },
    {
      title: "Research Intern",
      company: "Observatoire de Paris",
      location: "Meudon, FR",
      startDate: "Mar 2017",
      endDate: "July 2017",
      tasks: [
        "Computed Pluto's subsurface heat emissions during flight over New Horizons using the heat and radiative transfer equation on IDL",
      ],
    },
  ],

  // projects: [
  //   {
  //     title: "Project Title",
  //     projectUrl: "name.com/projectdemo",
  //     tasks: [
  //       "The more work experience you have, the less relevant outside-work projects tend to become",
  //       "If you have something that really stands out, consider listing it here",
  //     ],
  //   },
  //   {
  //     title: "Project Title",
  //     projectUrl: "github.com/name/project",
  //     tasks: [
  //       "Only list real projects, not mandatory school projects or trivial tutorial projects found online Something that someone uses to solve a problem.",
  //       "Something that has users (can be just you, as long as you use it often) and is actively maintained and isn’t just rotting in a GitHub repo, never to see a PR for the rest of its life",
  //     ],
  //   },
  //   {
  //     title: "Project Title",
  //     projectUrl: "projectsite.com",
  //     tasks: [
  //       "Resume checklist: https://old.reddit.com/r/EngineeringResumes/wiki/checklist",
  //       "LaTeX version of this template: https://www.overleaf.com/read/npmbvrbvthpd#bb3114",
  //     ],
  //   },
  // ],
  education: [
    { school: "Simplon.Co", degree: "AI Data Developer", gradYear: "Nov 2021" },
    {
      degree: "Earth Sciences MS",
      school: "Université Paris Saclay",
      gradYear: "Jul 2017",
    },
    {
      degree: "Earth Sciences BS",
      school: "Université Paris 7",
      gradYear: "Jul 2015",
    },
  ],
};

export const resumeFr = {
  skills: [
    { name: "Langages de programmation", description: "Python, JavaScript" },
    {
      name: "Analyse de données et Machine Learning",
      description: "Pandas, Pytorch, Pyspark",
    },
    { name: "Base de données", description: "SQL (PostgreSQL), MongoDB" },
    {
      name: "Framework web",
      description: "FastAPI, Django, React.JS, NextJS",
    },
    { name: "Outils CI/CD", description: "Git, Docker, Kubernetes" },
    { name: "Cloud", description: "GCP, Azure, AWS" },
  ],
  // languages: [
  //   {
  //     name: "French",
  //     level: "Mother tongue",
  //   },
  //   {
  //     name: "English",
  //     level: "Fluent",
  //   },
  // ],
  experiences: [
    {
      title: "Data Engineer",
      company: "Engie GEMS",
      location: "Bruxelles, BE",
      startDate: "Nov 2022",
      endDate: "Avr 2024",
      tasks: [
        "Reconstruction de l'infrastructure d'une 20aine de dashboards destinés à l'usage Short Term Trading pour obtenir une meilleure maintenance, expansion et mobilité des applications Flask, à l'aide de Kubernetes et Azure Pipelines",
        "Ajout de scripts Python permettant de récupérer et stocker des données issues de diverses séries temporelles pour le marché Européen de l'éléctricité au gestionnaire de tâches existant pour leur analyse, avec boucle asynchrone, rendant le processus 100 fois plus rapide",
        "Migration de l'automatisation et du stockage des tâches sur AWS dans le but de développer une méthodologie plus efficace pour les séries temporelles aux métadonnées complexes résultant un partitionnement par clé plus approprié",
        "Amélioration des performances dashboard en ajoutant des fonctionnalités d'affichage supplémentaires pour l'analyse des données du gaz Européen à l'aide de Pandas et Flask",
        "Réparation de 10% de la dette technique accumulée sur le client de la base de données des séries temporelles.",
        "Refactorisation du système d'interprétation des messages d'indisponibilité des centrales de production Norvégiennes dans le but de diviser la méthode pour les V1 et V2 de la base de données et obtenir le produit transformé",
      ],
    },
    {
      title: "Software Engineer",
      company: "Haulogy",
      location: "Liège, BE",
      startDate: "Juin 2022",
      endDate: "Sept 2022",
      tasks: [
        "Initialisation d'un module pour l'extension d'une solution logicielle de gestion de l'électricité pour valider les paramètres d'entrée d'un fichier CSV, via Pandas et Pydantic",
        "Amélioration du gestionnaire d'applications pour les opérations du marché de l'électricité en ajoutant des fonctionnalités aux parsers, sur les fonctions principales et adaptateurs web sur FastAPI",
      ],
    },
    {
      title: "Data Scientist",
      company: "DISAITEK",
      location: "Paris FR",
      startDate: "Oct 2020",
      endDate: "Nov 2021",
      tasks: [
        "Récolte de captures d'écran sur Google Maps pour un modèle détectant la présence de décharges illégales, ce qui a permis de l'entraîner sur des images haute-résolution",
        "Lancement d'un modèle de détection avec Pytorch de régions entre images radar et images satellites, précision supérieure à 90% pour la terre, les rivières et les forêts",
        "Création d'une application fullstack avec Django et NextJS qui implémente l'authentification par JWT pour observer la probabilité et l'évolution des décharges illégales dans le Val d'Oise sur carte interactive",
        "Participation au challenge Spacenet pour détecter des bâtiments à l'aide de signatures spectrales optiques dans la perspective d'utiliser les images satellitaires pour les projets futurs de l'entreprise",
      ],
    },
    {
      title: "Stagiaire",
      company: "Observatoire de Paris",
      location: "Meudon, FR",
      startDate: "Mar 2017",
      endDate: "Juil 2017",
      tasks: [
        "Calcul des émissions thermiques de subsurface de Pluton au cours du survol de la sonde New Horizons à l'aide de l'équation de la chaleur et du transfert radiatif sur IDL",
      ],
    },
  ],

  // projects: [
  //   {
  //     title: "Project Title",
  //     projectUrl: "name.com/projectdemo",
  //     tasks: [
  //       "The more work experience you have, the less relevant outside-work projects tend to become",
  //       "If you have something that really stands out, consider listing it here",
  //     ],
  //   },
  //   {
  //     title: "Project Title",
  //     projectUrl: "github.com/name/project",
  //     tasks: [
  //       "Only list real projects, not mandatory school projects or trivial tutorial projects found online Something that someone uses to solve a problem.",
  //       "Something that has users (can be just you, as long as you use it often) and is actively maintained and isn’t just rotting in a GitHub repo, never to see a PR for the rest of its life",
  //     ],
  //   },
  //   {
  //     title: "Project Title",
  //     projectUrl: "projectsite.com",
  //     tasks: [
  //       "Resume checklist: https://old.reddit.com/r/EngineeringResumes/wiki/checklist",
  //       "LaTeX version of this template: https://www.overleaf.com/read/npmbvrbvthpd#bb3114",
  //     ],
  //   },
  // ],
  education: [
    {
      school: "Simplon.Co",
      degree: "Développeur Data IA",
      gradYear: "Nov 2021",
    },
    {
      school: "Université Paris Saclay",
      degree: "Master Sciences de la Terre",
      gradYear: "Juil 2017",
    },
    {
      school: "Université Paris 7",
      degree: "Licence Sciences de la Terre",
      gradYear: "Juil 2015",
    },
  ],
};
