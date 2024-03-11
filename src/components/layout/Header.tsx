import * as React from "react";
import header_logo from "@assets/images/header_logo.png";

const Header = () => {
  return (
    <header className="max-w-[560px] min-w-80 w-full z-10 fixed h-[78px] py-[26px] px-[45px] bg-black">
      <img src={header_logo} />
    </header>
  );
};

export default Header;
