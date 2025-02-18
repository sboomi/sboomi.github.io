import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="p-6 border-t">
      <div className="flex items-center gap-4 mb-4">
        <a
          href="https://linkedin.com/shadiboomi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sboomi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm text-gray-600">© All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
