import * as React from "react";
import PlanningImage from "@assets/images/components/planning.svg";
import DesignImage from "@assets/images/components/design.svg";
import DevelopmentImage from "@assets/images/components/development.svg";

const Planning = () => {
  return (
    <section className=" pl-[25%] pr-[44px] w-full h-[80vh] bg-black">
      <div className="font-semibold tracking-wider mb-9 text-white text-2xl">
        Planning
      </div>

      <div className="font-normal text-xl text-white w-[670px]">
        아이디어만 가지고 오셔도 괜찮아요. 브리밍은 브랜드 전략부터 유저리서치,
        시장 검증을 위한 MVP 설계까지 모든것을 팀으로 함께 만들어 갑니다. 또한
        체계적인 예산 실행으로 원하는 단계를 세분화하여 진행할 수 있습니다.
      </div>

      <div className="w-full h-[15%]" />

      <img src={PlanningImage} />
    </section>
  );
};

const Design = () => {
  return (
    <section className="pl-[25%] pr-[44px] w-full h-[80vh] bg-black">
      <div className="font-semibold tracking-wider mb-9 text-white text-2xl">
        Design
      </div>

      <div className="font-normal text-xl text-white w-[670px]">
        너무 많이 고민하지 마세요. 브리밍의 디자인은 클라이언트가 상상하는
        디자인과 일치할 때 까지 계속 제공합니다.
      </div>

      <div className="w-full h-[10%]" />

      <div className="flex gap-[24px] w-full">
        <img src={DesignImage} />

        <img src={DesignImage} />

        <img src={DesignImage} />
      </div>
    </section>
  );
};

const Development = () => {
  return (
    <section className="pl-[25%] pr-[44px] w-full h-[80vh] bg-black">
      <div className="w-full h-[25%]" />

      <div className="relative">
        <div className="font-semibold tracking-wider mb-9 text-white text-2xl">
          Development
        </div>

        <div className="font-normal text-xl text-white w-[400px]">
          브리밍의 개발팀은 각 프로젝트마다 최고의 기술적 해결책을 제공하며
          클라이언트가 원할때마다 실시간 대응과 피드백이 이루어집니다.
        </div>

        <div className="absolute top-[-100%] right-20">
          <img src={DevelopmentImage} width="80%" />
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  return (
    <section className="">
      <div className="font-bold tracking-widest py-[53px] px-[48px] bg-black text-[42px] text-white">
        What We Do
      </div>

      <div className="relative">
        <nav className="flex flex-col gap-[48px] text-[24px] font-semibold text-white float-left sticky top-[100px] bottom-[500px] left-[55px] bg-black text-white">
          <div>Planning</div>
          <div>Design</div>
          <div>Development</div>
        </nav>

        <Planning />

        <Design />

        <Development />
      </div>
      <div className="w-full h-[30vh] bg-black" />
    </section>
  );
};

export default WhatWeDo;
