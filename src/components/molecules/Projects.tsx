import React from "react";
import ScrollLayout from "../atoms/ScrollLayout";
import { project } from "@/shared/data";
import { Project } from "@/shared/types";
import ProjectCard from "../atoms/ProjectCard";

const Projects = () => {
  return (
    <ScrollLayout id="projectSection" classList="z-10 bg-teal-400  h-[150vh]">
      <h2>{project.title}</h2>
      <h3>{project.description}</h3>

      <div>
        {project.projects.map((prjt: Project) => (
          <ProjectCard data={prjt} />
        ))}
      </div>
    </ScrollLayout>
  );
};

export default Projects;
