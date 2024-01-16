import React from "react";
import ScrollLayout from "../atoms/ScrollLayout";
import { experience } from "@/shared/data";
import { ExperienceSection } from "@/shared/types";
import ExperienceCard from "../atoms/ExperienceCard";

const Experience = () => {
  return (
    <ScrollLayout id="experienceSection" classList="z-10 bg-red-300 h-[150vh] ">
      <div>
        <h2>{experience.title}</h2>
        <h3>{experience.subtitle}</h3>
        <h4>{experience.description}</h4>
      </div>
      <div>
        {experience.sections.map((expc: ExperienceSection) => (
          <ExperienceCard data={expc} />
        ))}
      </div>
    </ScrollLayout>
  );
};

export default Experience;
