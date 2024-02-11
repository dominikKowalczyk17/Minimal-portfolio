import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Dominik
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Junior Frontend Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Hey there! I'm a passionate self-taught junior frontend developer on a
        perpetual quest for knowledge. My coding journey began as a solo
        adventure, and now I'm weaving through the digital landscape, crafting
        seamless and visually appealing user experiences.
        <br />I am currently working for Polsat Media Group, developing new
        websites for clients but also maintaining portals such as PolsatNews,
        PolsatSport, NesoBus, NesoStacje and much more smaller sites.
      </p>
    </div>
  );
}

export default Intro;
