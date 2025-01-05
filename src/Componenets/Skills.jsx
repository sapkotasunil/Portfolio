import { div } from "motion/react-client";
import React from "react";

const Skills = (props) => {
  return (
    <div className="max-h-[16vh] min-w-full lg:min-w-[40vw] border-l-4 border-solid flex-wrap  border-primaryColor  rounded-lg flex px-1 py-2 mt-4  gap items-center ml-1 bg-secondaryColor">
      <div className="max-h-fit w-36  bg-secondaryColor ">{props.icon}</div>
      <div className=" bg-secondaryColor text-primaryColor text-3xl ">
        {props.skillName}
      </div>
    </div>
  );
};

export default Skills;
