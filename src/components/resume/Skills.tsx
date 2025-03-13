interface SkillProps {
  name: string;
  description: string;
}

function Skills({
  skills,
  sectionTitle = "Skills",
}: {
  skills: SkillProps[];
  sectionTitle?: string;
}) {
  const skillDisplay = skills.map((skill) => (
    <li>
      <span className="font-bold">{skill.name}:</span> {skill.description}
    </li>
  ));

  return (
    <div>
      <section className="">
        <h2 className="text-xl font-bold space-y-8">{sectionTitle}</h2>
        <hr className="border-delimsize border-black space-y-8" />
        <ul>{skillDisplay}</ul>
      </section>
    </div>
  );
}

export default Skills;
