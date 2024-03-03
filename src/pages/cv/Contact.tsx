import React from "react";

const Contact = () => (
  <section id="work-experience" className="w-full col-start-2 flex flex-col max-w-3xl min-w-96 self-center items-start">
    <h3 className="text-lg text-slate-50 mb-2">Contact</h3>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">LinkedIn</p>
      <a className="col-span-3 text-slate-200"href="https://www.linkedin.com/in/juan-c-rodriguez-salas/" target="_blank" rel="noopener noreferrer me" data-hover="true">juan-c-rodriguez-salas</a>
    </div>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">GitHub</p>
      <a className="col-span-3 text-slate-200"href="https://github.com/jcyber2017" target="_blank" rel="noopener noreferrer me" data-hover="true">jcyber2017</a>
    </div>
    <div className="w-full text-base text-slate-400 grid grid-cols-4">
      <p className="">Email</p>
      <a className="col-span-3 text-slate-200"href="mailto:JuanCRodriguezSalas@gmail.com" target="_blank" rel="noopener noreferrer me" data-hover="true">JuanCRodriguezSalas@gmail.com</a>
    </div>
    
  </section>
);

export default Contact;
