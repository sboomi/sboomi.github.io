import Layout from "./components/Layout";
import updateMarkdown from "./md-posts/updates.md?raw";
import doingMarkdown from "./md-posts/currently-doing.md?raw";
import generalPostMarkdown from "./md-posts/general-post.md?raw";
import Markdown from "react-markdown";

interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
}

const ContentSection = ({ title, content }: ContentSectionProps) => {
  return (
    <section className="mb-8 border-b-2 border-gray-400">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {content}
    </section>
  );
};

function App() {
  const sections = [
    {
      title: "Currently doing",
      content: <Markdown className="prose">{doingMarkdown}</Markdown>,
    },
    {
      title: "General Post",
      content: <Markdown className="prose">{generalPostMarkdown}</Markdown>,
    },
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
