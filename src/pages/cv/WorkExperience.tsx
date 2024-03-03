import React from "react";

const WorkExperience = () => (
  <section id="work-experience" className="mb-4 w-full col-start-2 flex flex-col max-w-3xl min-w-96 self-center items-start">
    <h3 className="text-lg text-slate-50 mb-2">Work Experience</h3>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">2020 - Now</p>
      <p className="col-span-3 text-slate-200">Frontend Developer at <a href="https://www.tigim.co/" target="_blank" rel="noreferrer" className="text-slate-300">Tigim</a></p>
      <p className="col-start-2">Remote</p>
    </div>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">2016 - 2019</p>
      <p className="col-span-3 text-slate-200">Frontend Developer at <a href="https://sadowado.com/" target="_blank" rel="noreferrer" className="text-slate-300">Sadowado LLC</a></p>
      <p className="col-start-2">Remote</p>
    </div>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">2015 - 2016</p>
      <p className="col-span-3 text-slate-200">Developed my own administrative system</p>
      <p className="col-start-2">Venezuela</p>
    </div>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">2011 - 2015</p>
      <p className="col-span-3 text-slate-200">Developer at <a href="https://www.facebook.com/ce.panamericano" target="_blank" rel="noreferrer" className="text-slate-300">CEP</a></p>
      <p className="col-start-2">Venezuela</p>
    </div>
  </section>
);

export default WorkExperience;
