import * as React from "react";
import DesignMediumImage from "@assets/images/components/design_medium.svg";
import DesignLargeImage from "@assets/images/components/design_large.svg";

const Projects = () => {
  return (
    <section className="pt-[300px] px-[44px]">
      <div className="font-poppins font-normal w-[870px] text-[42px] tracking-wider">
        We collaborate with agencies like yours to craft exceptional products
      </div>

      <div className="w-full h-[125px]" />

      <div className="relative flex flex-wrap gap-[30px] w-full">
        <img src={DesignLargeImage} width="65%" />
        <img src={DesignMediumImage} width="32%" />
        <img src={DesignMediumImage} width="32%" />
        <img src={DesignLargeImage} width="65%" />
        <img src={DesignMediumImage} width="32%" />
        <img src={DesignMediumImage} width="32%" />
        <img src={DesignMediumImage} width="32%" />
      </div>
    </section>
  );
};

export default Projects;
