import React, { PropsWithChildren } from "react";
import LeftBanner from "./LeftBanner";
import RightProduct from "./RightProduct";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="m-auto max-w-6xl w-full flex justify-between">
      <LeftBanner />

      <RightProduct>{children}</RightProduct>
    </div>
  );
}
