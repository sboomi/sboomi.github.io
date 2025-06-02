import { BsSubstack } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
	return (
		<footer className="p-6 border-t">
			<div className="flex items-center gap-4 mb-4">
				<a
					href="https://www.linkedin.com/in/shadiboomi/"
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
				<a
					href="https://www.kaggle.com/sboomi"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-gray-900 transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="0.63em"
						height="1em"
						viewBox="0 0 320 512"
					>
						<path
							fill="currentColor"
							d="M304.2 501.5L158.4 320.3L298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3l110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z"
						/>
					</svg>
				</a>
				<a
					href="https://substack.com/@shadiboomi290987"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-gray-900 transition-colors"
				>
					<BsSubstack />
				</a>
			</div>
			<div className="text-sm text-gray-600">
				<p>© {new Date().getFullYear()} sboomi.</p>
				<p>All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
