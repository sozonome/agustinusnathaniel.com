import React from 'react'

export default function ProjectCard(
  value
) {
  return (
    <div className="w-full bg-gray-800 p-2 rounded-lg my-4" key={"mantap"}>
      <h2 className="text-2xl font-bold">{value.title}</h2>
      <p className="text-sm mb-2">{value.description}</p>
      <div className="flex">

      </div>
      <div className="flex">
        {

        }
        <a className="font-bold bg-blue-800 rounded p-2 mr-2" href={""} target="_blank" rel="noreferrer noopener">Visit</a>
        <a className="font-bold border border-blue-200 rounded-lg p-2 mr-2" href={""} target="_blank" rel="noreferrer noopener">Source</a>
      </div>
    </div>
  )
}
