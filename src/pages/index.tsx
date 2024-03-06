import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/sections/Hero";
import Carousel from "../components/sections/Carousel";
import WhatWeDo from "../components/sections/WhatWeDo";
import Cta from "../components/sections/Cta";
import Projects from "../components/sections/Projects";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* <Hero />

      <Carousel>
        <div
          id="contentStart"
          className="flex flex-col gap-[3%] pl-[12%] justify-center w-full h-screen tracking-[.75em]"
        >
          <p className="font-poppins font-normal text-[70px] text-[#0E0E0E]">
            A team,
          </p>
          <p className="font-poppins font-normal text-[70px] text-[#0E0E0E]">
            Exceeding the product value
          </p>
          <p className="font-poppins font-normal text-[70px] text-[#0E0E0E]">
            with brimming ideas
          </p>
        </div>
      </Carousel>

      <WhatWeDo />

      <Projects />

      <Carousel>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <p className="font-bold text-[50px] text-[#0E0E0E]">
            브리밍은 사용자 경험을 가장 중요하게 생각합니다.
          </p>
          <p className="font-bold text-[50px] text-[#0E0E0E]">
            풍부한 프로젝트 경험을 통한 차별화된 프로덕트를 경험해보세요
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <p className="font-bold text-[50px] text-[#0E0E0E]">
            만약 클라이언트가 쉬지 않는다면 브리밍도 쉬지 않습니다.
          </p>
          <p className="font-bold text-[50px] text-[#0E0E0E]">
            언제나 대응가능한 팀을 경험해보세요
          </p>
        </div>
      </Carousel>

      <Cta /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
