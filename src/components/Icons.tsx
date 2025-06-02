import { IconBaseProps } from "react-icons";

const CustomPythonIcon = (props: IconBaseProps) => (
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		width="1em"
		height="1em"
		{...props} // This allows react-icons props like `size` and `color`
	>
		<path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12zm9 4h2v-1h-2v1zm-1-6h4V8h-4v2z" />
	</svg>
);

export default CustomPythonIcon;
