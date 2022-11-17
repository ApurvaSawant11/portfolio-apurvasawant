import React from "react";
import {
  DazzleCershop,
  DazzleNotes,
  DazzleTube,
  DazzleUI,
  Expliqa,
  FocusHours,
  Webpack,
} from "../assets";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: DazzleUI,
      title: "Dazzle UI",
      desc: "Dazzle UI is a free open-source, highly customizable component library.",
      live: "https://dazzle-ui.netlify.app/",
      repo: "https://github.com/ApurvaSawant11/Dazzle-UI",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      src: DazzleCershop,
      title: "Dazzle Cerashop",
      desc: "Dazzle Cerashop is an e-commerce website designed to sell Ceramic Products",
      live: "https://dazzle-cerashop.vercel.app/",
      repo: "https://github.com/ApurvaSawant11/Dazzle-Cerashop",
      tech: ["React", "Context API", "CSS"],
    },
    {
      id: 3,
      src: DazzleTube,
      title: "Dazzle Tube",
      desc: "Dazzle Tube is a video library consisting of all the content related to ceramic products.",
      live: "https://dazzle-tube.vercel.app/",
      repo: "https://github.com/ApurvaSawant11/Dazzle-Tube",
      tech: ["React", "Context API", "CSS"],
    },
    {
      id: 4,
      src: Expliqa,
      title: "Expliqa",
      desc: "A forum app that allows you to share your views via posts and ask questions as well.",
      live: "https://expliqa.vercel.app/login",
      repo: "https://github.com/ApurvaSawant11/expliqa",
      tech: ["React", "Redux", "tailwindCSS"],
    },
    {
      id: 5,
      src: DazzleNotes,
      title: "Dazzle Notes",
      desc: "Dazzle notes provides an easier way to save lists, notes, and more. It is a note-taking app created with firebase as backend.",
      live: "https://dazzle-notes.vercel.app/landingpage",
      repo: "https://github.com/ApurvaSawant11/Dazzle-Notes",
      tech: ["React", "Context API", "Firebase", "CSS"],
    },
    {
      id: 6,
      src: FocusHours,
      title: "Focus Hours",
      desc: "A customizable pomodoro timer app built with TypeScript",
      live: "https://focus-hours.vercel.app/",
      repo: "https://github.com/ApurvaSawant11/focus-hours",
      tech: ["React", , "Context API", "TypeScript", "CSS", "Testing"],
    },
    {
      id: 7,
      src: Webpack,
      title: "Webpack Starter",
      desc: "A vanillaJS webpack starter",
      live: "",
      repo: "https://github.com/ApurvaSawant11/webpack-starter",
      tech: [],
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-darkblue to-black w-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
          <p className="py-6">
            Developed these projects while learning at the neogcamp
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {projects.map(({ id, title, src, desc, live, repo, tech }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 pb-6 rounded-lg shadow-md shadow-slate-500 flex-col`}
            >
              <img src={src} alt="" className="mx-auto rounded-md" />
              <p className="mt-4 mb-2 font-bold">{title}</p>

              <p className="text-sm text-slate-400 mb-2">{desc}</p>

              <div className="flex flex-wrap justify-center">
                {tech.map((item) => (
                  <p
                    key={item}
                    className={`text-xs text-gray-500 px-1 m-1 border-solid border-2 border-slate-600 rounded-md`}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                {live !== "" && (
                  <a
                    href={live}
                    className="px-1 m-1 text-white w-full flex justify-center hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {repo !== "" && (
                  <a
                    href={repo}
                    className="px-1 my-1 text-white w-full flex justify-center hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
