import React from "react";

const ProjectItem = ({ img, title, code, live }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
    >
      {/* Hover effect for images */}
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
          {title}
        </span>
        <div className="pt-8 text-center ">
          {/* eslint-disable-next-line */}
          <a href={code} target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
            >
              Code
            </button>
          </a>
          {/* eslint-disable-next-line */}
          <a href={live} target="_blank">
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
            >
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
