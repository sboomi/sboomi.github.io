import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Resume from "./pages/Resume.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="skills" element={<Skills />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
);
