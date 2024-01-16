import { Project } from "@/shared/types";
import React from "react";

const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <div>
      <h3>{data.name}</h3>
    </div>
  );
};

export default ProjectCard;
