import React from "react";
import ScrollLayout from "../atoms/ScrollLayout";
import { educationHead, qualifications } from "@/shared/data";
import { Qualifications } from "@/shared/types";
import QualificationCard from "../atoms/QualificationCard";

const Education = () => {
  return (
    <ScrollLayout
      id="educationSection"
      classList="z-10 bg-blue-500 text-center h-[150vh] p-10 "
    >
      <h2 className="text-4xl">{educationHead.title}</h2>
      <div className="border-2 border-red-700 my-10">
        {qualifications.map((qlfn: Qualifications) => (
          <QualificationCard data={qlfn} key={`${qlfn.title}`} />
        ))}
      </div>
    </ScrollLayout>
  );
};

export default Education;
