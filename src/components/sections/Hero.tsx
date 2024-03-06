import * as React from "react";
import * as Styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-full h-screen bg-black">
      <div className="w-full h-[15%]" />

      <video loop autoPlay muted className="h-[60%]">
        <source
          src={
            "https://brimming-assets.s3.ap-northeast-2.amazonaws.com/landing_hero_object.mp4"
          }
          type="video/mp4"
        />
      </video>

      <div className="w-full h-[5%]" />

      <a
        className={`${Styles.mouse}`}
        onClick={() => {
          document.getElementById("contentStart")?.scrollIntoView();
        }}
      />

      <div className="w-full h-[4%]" />

      <div className="bg-white w-screen h-[1px]" />

      <div className="w-full h-[4%]" />

      <div
        className={`font-poppins font-extralight w-fit text-white text-2xl ${Styles.text}`}
        onClick={() => {
          document.getElementById("contentStart")?.scrollIntoView();
        }}
      >
        play
      </div>
    </section>
  );
};

export default Hero;
