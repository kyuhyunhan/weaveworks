import * as React from "react";

const Cta = () => {
  return (
    <section className="px-[44px] pt-[14%] w-full h-screen bg-white">
      <div className="text-[72px] font-bold">
        <p>Let's Talk About</p> <p>How We Can Help</p>
      </div>

      <div className="w-full h-[16%]" />

      <div className="flex justify-between">
        <div className="font-bold text-[32px]">
          <p>브리밍과 함께</p>
          <p>당신의 아이디어를 실현해보세요</p>
        </div>

        <div className="flex justify-center items-center w-[250px] h-[250px] bg-black text-white rounded-full cursor-pointer">
          Contact
        </div>
      </div>
    </section>
  );
};

export default Cta;
