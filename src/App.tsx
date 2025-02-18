import Layout from "./components/Layout";
import updateMarkdown from "./md-posts/updates.md?raw";
import Markdown from "react-markdown";

interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
}

const ContentSection = ({ title, content }: ContentSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {content}
    </section>
  );
};

function App() {
  const sections = [
    {
      title: "Updates",
      content: <Markdown className="prose">{updateMarkdown}</Markdown>,
    },
  ];

  return (
    <Layout>
      <div className="max-w-3xl">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
