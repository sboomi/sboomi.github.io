import React from "react";
import Layout from "../components/Layout";
import { skills, SkillItemProps } from "../data";

const SkillCategory = ({
  category,
  items,
}: {
  category: string;
  items: SkillItemProps[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-blue-500">{item.icon}</span>
            <span className="text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  console.log(skills);

  return (
    <Layout>
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Skills
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillCategory
              key={skill.id}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
