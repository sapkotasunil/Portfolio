import React from "react";

const Education = (props) => {
  return (
    <>
      <div className=" w-[95%]   lg:w-[80%]  max-h-fit  mt-3 p-1 py-3 lg:p-5 rounded-lg  border-l-4 border-solid  border-primaryColor bg-secondaryColor">
        <div className=" flex bg-secondaryColor justify-between items-center min-w-full   px-4">
          <div className="text-xl text-primaryColor  bg-secondaryColor">
            {props.academic_name}
          </div>
          <div className="text-zinc-500 text-base bg-secondaryColor">
            {props.duration}
          </div>
        </div>
        <h1 className="bg-secondaryColor px-2 font-logoFont lg:px-4 ">
          {props.classes}
        </h1>
      </div>
    </>
  );
};

export default Education;
