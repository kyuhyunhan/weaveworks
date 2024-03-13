import * as React from "react";
import logo_header from "@assets/images/logo_header.png";

const Header = () => {
  return (
    <header className="max-w-[560px] min-w-80 w-full z-10 fixed h-[78px] py-[26px] px-[45px] bg-black">
      <img src={logo_header} />
    </header>
  );
};

export default Header;
