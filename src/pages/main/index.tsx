import React from "react";

import profile from "images/perfil.jpeg";

const Main = () => {
  return (
    <div>
      <h1>Hi, I'm Juan</h1>
      <img src={profile} alt="Juan" width={400} />
    </div>
  );
};

export default Main;
