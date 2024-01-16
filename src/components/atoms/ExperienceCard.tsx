import { ExperienceSection } from "@/shared/types";
import React from "react";

const ExperienceCard = ({ data }: { data: ExperienceSection }) => {
  return (
    <div>
      <h3>{data.title}</h3>
    </div>
  );
};

export default ExperienceCard;
