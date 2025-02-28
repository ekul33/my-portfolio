import React from "react";

// Array of education objects
const educationList = [
  {
    degree: "A Level - Computing",
    institution: "Long Road Sixth Form College",
    year: "2010 - 2012",
  },
  {
    degree: "Full Stack Software Development Skills Bootcamp",
    institution: "HyperionDev",
    year: "2024 - 2025",
  },
  {
    degree: "GitHub Foundations",
    institution: "GitHub",
    year: "2025",
  },
  {
    degree: "Computing & IT with Psychology BSc",
    institution: "The Open University",
    year: "2025 - Present",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="education-grid">
        <div className="education-grid-container">
          {educationList.map((education, index) => (
            <div key={index}>
              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <p>{education.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;