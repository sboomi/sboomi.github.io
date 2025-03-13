interface EducationProps {
  school: string;
  degree: string;
  gradYear: string;
}

function Education({
  education,
  sectionTitle = "Education",
}: {
  education: EducationProps[];
  sectionTitle?: string;
}) {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold space-y-8">{sectionTitle}</h2>
        <hr className="border-delimsize border-black space-y-8 mb-1" />
        <ul>
          {education.map((eduItem, index) => (
            <li key={index} className="flex justify-between ">
              <span>
                <span className="font-semibold">{eduItem.school}</span> –{" "}
                <span>{eduItem.degree}</span>
              </span>
              <span>{eduItem.gradYear}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Education;
