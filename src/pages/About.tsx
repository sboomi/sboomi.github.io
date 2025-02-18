import React from "react";
import Layout from "../components/Layout";
import Markdown from "react-markdown";
import aboutMarkdown from "../md-posts/about.md?raw";

const About: React.FC = () => {
  console.log(aboutMarkdown);
  return (
    <Layout>
      <Markdown className="prose">{aboutMarkdown}</Markdown>
    </Layout>
  );
};

export default About;
