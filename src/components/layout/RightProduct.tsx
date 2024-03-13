import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Spacer from "../Spacer";
import Footer from "./Footer";

export default function RightProduct({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[560px] min-w-80 w-full bg-black ml-auto mr-0">
      <Header />

      <main className="mt-[78px]">
        <Spacer size={10} />

        {children}
      </main>

      <Footer />
    </div>
  );
}
