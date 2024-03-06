import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-6xl">
      {/* <Header /> */}

      {/* <main className="w-screen h-fit"> */}
      {children}
      {/* </main> */}

      {/* <Footer /> */}
    </div>
  );
}
