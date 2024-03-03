import React from "react";

import profile from "images/perfil-rounded.jpeg";

const Me = () => (
  <section id="me" className="w-full col-start-2 grid grid-cols-4 max-w-3xl min-w-96 self-center mb-4">
    <div className="">
      <img
        src={profile}
        alt="Juan Rodriguez"
        width={100}
        className="rounded-full" />
    </div>
    <div className="flex flex-col col-span-3 items-start">
      <h1 className="text-3xl text-slate-50">Juan Rodríguez</h1>
      <p className="text-lg text-slate-400">Frontend Developer in Lima, Perú</p>
      <p className="px-2 py-1 text-xs text-slate-300 rounded-full bg-slate-900">
        JuanCRodriguezSalas@gmail.com
      </p>
    </div>
  </section>
);

export default Me;
