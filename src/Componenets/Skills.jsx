import React from "react";

const Skills = (props) => {
  return (
    <div className="max-h-fit min-w-[48%] bg rounded-lg flex  px-1 py-2  gap-1 items-center bg-secondaryColor">
      <div className="h-24 w-36 ">{props.icon}</div>
      <div className=" bg-secondaryColor text-primaryColor text-3xl ">
        {props.skillName}
      </div>
    </div>
  );
};

export default Skills;
