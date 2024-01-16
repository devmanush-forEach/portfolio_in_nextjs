import React from "react";
import ScrollLayout from "../atoms/ScrollLayout";
import { skills } from "@/shared/data";
import { SkillSection } from "@/shared/types";
import SkillCard from "../atoms/SkillCard";

const Skills = () => {
  return (
    <ScrollLayout id="skillSection" classList="z-10 bg-green-300 h-[150vh] ">
      <h2 className="text-4xl">Technical Skills & Frameworks</h2>
      <div>
        {skills.map((skill: SkillSection) => (
          <SkillCard data={skill} />
        ))}
      </div>
    </ScrollLayout>
  );
};

export default Skills;
