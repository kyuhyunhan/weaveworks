import React from "react";
import logo_footer from "@assets/images/logo_footer.png";

export default function LeftBanner() {
  return (
    <div className="fixed top-0 w-[512px] min-h-screen flex justify-center items-center">
      <img src={logo_footer} />
    </div>
  );
}
