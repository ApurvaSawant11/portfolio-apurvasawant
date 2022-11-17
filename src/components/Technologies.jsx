import React from "react";

import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import javascript from "../assets/technologies/javascript.png";
import reactImage from "../assets/technologies/react.png";
// import nextjs from "../assets/technologies/nextjs.png";
// import graphql from "../assets/technologies/graphql.png";
import github from "../assets/technologies/github.png";
import tailwind from "../assets/technologies/tailwind.png";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-darkblue to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg  shadow-slate-500 `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
