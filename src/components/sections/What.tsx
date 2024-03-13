import * as React from "react";
import Spacer from "../Spacer";
// import what_small from "@assets/images/what_small.png";
// import what_reasonable from "@assets/images/what_reasonable.jpeg";
// import what_share from "@assets/images/what_share.png";

const What = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black">
      <div className="flex flex-col gap-2 text-white text-3xl font-bold">
        <p className="text-center">의류 생산을 A to Z까지</p>
        <p className="text-center">위브 웍스로 한번에</p>
      </div>

      <Spacer size={10} />

      <div className="flex flex-col gap-6 text-white px-6">
        <Content
          caption="소량생산"
          title="50장만 주문해도 생산이 가능해요"
          content="위브웍스에서는 50장부터 소량 생산 가능합니다. 더이상 기존 의류에 로고만 박는게 아닌 브랜드만의 디자인의 의류를 생산하세요. 의류의 아이디어부터 디자인, 원단 디테일까지 위브웍스가 모든 과정을 담당합니다."
          image={"small"}
        />

        {/* <Content
          caption="합리적인 가격"
          title="합리적인 가격 높은 퀄리티의 제품"
          content="위브웍스만의 원단 데이터 기술을 통해 지금 가장 저렴하게 구매할 수 있는 원단을 추천드립니다. 위브웍스는 다른 프로모션 에이전시와 달리 과도한 이익책정,프로덕트마케팅 광고비용,유통 수수료를 없애고 최소 운영비,제품원가만으로 진행됩니다.기존 의류생산의 새로운 기준을 경험하고 싶다면 지금 위브웍스를 시작하세요."
          image={what_reasonable}
        />

        <Content
          caption="공동 제작 시스템"
          title="의류를 만드는 새로운 기준"
          content="위브웍스는 전자상거래의 공동구매 개념을 의류 제작에 도입하여 소량 주문을 모아 대량 생산하는 방식을 채택합니다. 이 공동 제작 방식을 통해 생산 비용과 마케팅 비용을 절감하며, 최소한의 운영 비용과 제품 원가만으로 운영됩니다. 새로운 의류 제작의 경험을 위브웍스에서 시작하세요."
          image={what_share}
        /> */}
      </div>
    </section>
  );
};

export default What;

const Content = ({ caption, title, content, image }: any) => {
  // const bgImage = {
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // }
  // const bgImage = {
  //   small: "bg-[url('../../assets/images/what_small.png')]",
  // }[image as string];

  return (
    <div className="flex flex-col gap-4">
      <div
        className="bg-cover"
        // style="background-image: url('...'); height: 400px"
        style={{
          // backgroundImage: `url("src/assets/images/what_small.png")`,
          height: "400px",
        }}
      />

      <div className="flex flex-col gap-2">
        <div className="text-[#7f63f9] text-md">{caption}</div>

        <div className="text-3xl font-bold">{title}</div>

        <div className="text-[#8D8D93]">{content}</div>
      </div>

      <Spacer size={4} />
    </div>
  );
};
