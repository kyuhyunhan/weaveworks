import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Spacer from "../Spacer";

export default function RightProduct({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[560px] min-w-80 w-full bg-black">
      <Header />

      <main className="mt-[78px] px-10">
        <Spacer size={10} />

        {children}
      </main>
    </div>
  );
}
