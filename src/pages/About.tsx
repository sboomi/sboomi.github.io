import Layout from "@/components/Layout";
import MarkdownFormatter from "@/components/MarkdownFormatter";
import aboutMarkdown from "@/md-posts/about.md?raw";
import React from "react";

const About: React.FC = () => {
	return (
		<Layout>
			<MarkdownFormatter content={aboutMarkdown} />
		</Layout>
	);
};

export default About;
