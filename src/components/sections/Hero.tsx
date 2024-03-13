import * as React from "react";
import Spacer from "../Spacer";
import Vimeo from "@u-wave/react-vimeo";

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black px-10">
      <p className="text-white text-xl">커스텀 디자인 의류 생산</p>

      <Spacer size={4} />

      <div className="flex flex-col gap-2 text-white text-5xl font-bold">
        <p className="text-center">소량이지만 특별하게</p>
        <p className="text-center">위브웍스로 시작하세요</p>
      </div>

      <Spacer size={4} />

      <button className="hover:bg-white hover:text-black py-2 px-4 text-white border border-white rounded-full">
        주문제작 의뢰하기
      </button>

      <Spacer size={10} />

      <Vimeo
        video="https://player.vimeo.com/video/912907993?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        autoplay={true}
        showTitle={false}
        loop={true}
        muted={true}
      />
    </section>
  );
};

export default Hero;
