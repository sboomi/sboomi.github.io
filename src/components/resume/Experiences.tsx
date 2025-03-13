interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  tasks: string[];
}

function Experience({
  title,
  company,
  location,
  startDate,
  endDate,
  tasks,
}: ExperienceProps) {
  return (
    <div className="mb-3 mt-2">
      <h3 className="flex justify-between">
        <span>
          <span className="font-bold">{title}</span>, {company} – {location}
        </span>
        <span>
          {startDate} – {endDate}
        </span>
      </h3>
      <ul className="list-disc pl-5">
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function Experiences({
  experiences,
  sectionTitle = "Experiences",
}: {
  experiences: ExperienceProps[];
  sectionTitle?: string;
}) {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold space-y-8 ">{sectionTitle}</h2>
        <hr className="border-delimsize border-black space-y-8" />
        {experiences.map((experience) => (
          <Experience
            title={experience.title}
            company={experience.company}
            location={experience.location}
            startDate={experience.startDate}
            endDate={experience.endDate}
            tasks={experience.tasks}
          />
        ))}
      </section>
    </>
  );
}

export default Experiences;
