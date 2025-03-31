import React from "react";
import Layout from "../components/Layout";
import aboutMarkdown from "../md-posts/about.md?raw";
import MarkdownFormatter from "../components/MarkdownFormatter";

const About: React.FC = () => {
  return (
    <Layout>
      <MarkdownFormatter content={aboutMarkdown} />
    </Layout>
  );
};

export default About;
