import * as React from "react";
import LogoWhite from "@assets/images/components/logo_white.svg";
import { Link } from "gatsby";

const Naviagtion = () => {
  return (
    <nav className="flex gap-[30px] ">
      <Link to="#" className="text-white cursor-pointer">
        Main
      </Link>
      <Link to="#" className="text-white cursor-pointer">
        Work
      </Link>
      <Link to="#" className="text-white cursor-pointer">
        Projects
      </Link>
      <Link to="#" className="text-white cursor-pointer">
        Contact
      </Link>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="z-10 fixed flex justify-center w-screen h-[78px] py-[26px] px-[45px] bg-transparent">
      <div className="absolute left-[45px]">
        <img src={LogoWhite} />
      </div>

      <Naviagtion />
    </header>
  );
};

export default Header;
