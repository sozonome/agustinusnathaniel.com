import React from "react";

const ProjectCard = (props: any) => {
  return (
    <div className="w-full my-2 bg-gray-900 hover:bg-blue-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold">{props.value.title}</h2>
      <p className="text-sm mb-4">{props.value.description}</p>
      <div className="flex">
        {props.value.projectLink ? (
          <a
            className="font-bold bg-teal-800 hover:bg-orange-600 hover:text-white rounded-lg p-2 mr-2"
            href={props.value.projectLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit
          </a>
        ) : null}
        {props.value.repoLink ? (
          <a
            className="font-bold border border-blue-200 hover:bg-white hover:text-black rounded-lg p-2 mr-2"
            href={props.value.repoLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
