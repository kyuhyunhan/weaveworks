import * as React from "react";
import logo_footer from "@assets/images/logo_footer.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full bg-white p-10 text-sm">
      <img src={logo_footer} />

      <div className="w-[90%] flex flex-col items-center text-[#8D8D93]">
        <p>팀토핑 | 대표: 전성은</p>
        <p>010-6875-5627 | sungeunbyeol@gmail.com</p>
        <p>
          서울특별시 노원구 덕릉로 70가길 101 103동 203(상계동, 상계마들아파트)
        </p>
        <p>사업자등록번호: 393-40-01004</p>
      </div>

      <div className="mt-4 text-[#363639] font-bold">
        <span>개인정보 처리방침</span>
        <span>&nbsp;|&nbsp;</span>
        <span>이용약관</span>
        <span>&nbsp;|&nbsp;</span>
        <span>사업자정보확인</span>
      </div>
    </footer>
  );
};

export default Footer;
