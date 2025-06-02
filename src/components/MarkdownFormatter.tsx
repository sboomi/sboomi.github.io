import Markdown from "react-markdown";

export function MarkdownFormatter({ content }: { content: string }) {
	return (
		<div className="prose dark:prose-invert">
			<Markdown>{content}</Markdown>
		</div>
	);
}

export default MarkdownFormatter;
