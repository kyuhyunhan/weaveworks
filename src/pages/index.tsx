import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "../components/sections/Hero";
import Why from "../components/sections/Why";
import Spacer from "../components/Spacer";
import What from "../components/sections/What";
import ReviewAndCta from "../components/sections/ReviewAndCta";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero />

      <Spacer size={16} />

      <Why />

      <Spacer size={16} />

      <What />

      <Spacer size={16} />

      <ReviewAndCta />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
