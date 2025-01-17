import React from "react";
import { HiAcademicCap } from "react-icons/hi2";
import Education from "../Componenets/Education";

const Educations = () => {
  return (
    <div className="py-2">
      <div>
        <h1 className="text-3xl sm:text-4xl flex items-center gap-2 pt-12 lg:pt-24">
          <HiAcademicCap />
          Education
        </h1>
      </div>

      {/* Education Component */}
      <Education
        academic_name={"GhodaGhodi Multiple Campus"}
        duration={"2021-2026"}
        classes={
          "Bachelor of Information and Communication Technology in Education (BICTE)"
        }
      />
      <Education
        academic_name={"GhodaGhodi Multiple Campus"}
        duration={"2019-2021"}
        classes={"+2 In Management"}
      />
      <Education
        academic_name={"Rastriya Secondary School"}
        duration={"2016-2019"}
        classes={"Class 6 to Class 10"}
      />
      <Education
        academic_name={"Shree Sapta Shree Secondary School"}
        duration={"2007-2016"}
        classes={"From Nursery to Class 6"}
      />
    </div>
  );
};

export default Educations;
