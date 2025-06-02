import Markdown from "react-markdown";

export function MarkdownFormatter({ content }: { content: string }) {
	return (
		<div className="prose">
			<Markdown>{content}</Markdown>
		</div>
	);
}

export default MarkdownFormatter;
