import { SkillSection } from "@/shared/types";
import React from "react";

const SkillCard = ({ data }: { data: SkillSection }) => {
  return (
    <div>
      <h3>{data.title}</h3>
    </div>
  );
};

export default SkillCard;
