import React from "react";
import {
  Destructuring_I,
  Destructuring_II,
  MinimalisticForm,
  PureImpure,
} from "../assets";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      src: PureImpure,
      title: "Pure and Impure Functions",
      link: "https://apurvasawant11.hashnode.dev/pure-and-impure-functions",
      date: "May 13, 2022",
    },
    {
      id: 2,
      src: Destructuring_II,
      title: "Destructuring in JavaScript - Part II",
      link: "https://apurvasawant11.hashnode.dev/destructuring-in-javascript-part-ii",
      date: "May 13, 2022",
    },
    {
      id: 3,
      src: Destructuring_I,
      title: "Destructuring in JavaScript - Part I",
      link: "https://apurvasawant11.hashnode.dev/destructuring-in-javascript-part-i",
      date: "Aug 21, 2021",
    },
    {
      id: 4,
      src: MinimalisticForm,
      title: "How to build beautiful and minimalistic HTML form with less code",
      link: "https://apurvasawant11.hashnode.dev/how-to-build-beautiful-and-minimalistic-html-form-with-less-code",
      date: "Aug 3,  2021",
    },
  ];

  return (
    <div
      name="blogs"
      className="bg-gradient-to-b from-darkblue to-black w-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Blogs
          </p>
          <p className="py-6">
            I am also working on some technical and non techincal blogs. I like
            to document my journey of learning.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {blogs.map(({ id, src, title, link, date }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 pb-6 rounded-lg shadow-md shadow-slate-500`}
            >
              <img src={src} alt="" className="mx-auto rounded-md" />
              <p className="mt-4 font-bold ">{title}</p>
              <p className="mt-2 mb-6 text-sm text-gray-400">{date}</p>

              <a
                href={link}
                className="p-2 text-white border-2 rounded-md "
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
