import { Qualifications } from "@/shared/types";
import React from "react";

const QualificationCard = ({ data }: { data: Qualifications }) => {
  return <div>{data.title}</div>;
};

export default QualificationCard;
