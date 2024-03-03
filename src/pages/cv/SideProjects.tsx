import React from "react";

const SideProjects = () => (
  <section id="side-projects" className="mb-4 w-full col-start-2 flex flex-col max-w-3xl min-w-96 self-center items-start">
    <h3 className="text-lg text-slate-50 mb-2">Side Projects</h3>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">Ongoing</p>
      <p className="col-span-3"><a href="https://www.klimbing.pro" className="text-slate-300">Klimbing.pro</a></p>
      <p className="col-start-2 col-span-3">Still in progress, the idea is to have a web site that make easy to improve you climbing skills and show your progress</p>
    </div>
  </section>
);

export default SideProjects;
