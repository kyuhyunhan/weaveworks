import * as React from "react";
import Spacer from "../Spacer";

const Why = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black">
      <div className="flex flex-col gap-2 text-white text-3xl font-bold">
        <p className="text-center">왜 위브웍스 일까요?</p>
        <p className="text-center">내 브랜드를 가장 빠르게 출시하는 방법</p>
      </div>

      <Spacer size={10} />

      <div className="flex flex-col gap-6 text-white px-6">
        <Content
          title="상담"
          content="위브웍스는 담당 매니저가 배정되어 상담을 진행합니다. 위브웍스만의
            데이터 기반 원단 추천으로 보다 저렴하게 생산 가능한 위브웍스
            맨투맨을 경험해보세요."
        />

        <Content
          title="제작"
          content="위브웍스는 담당 매니저가 배정되어 디자인,원단,부자재,로고 등등
        필요한 과정들을 A to Z로 해결 해드립니다. 아이디어만 가져오세요
        나머지는 위브웍스가 해결할게요."
        />

        <Content
          title="배송"
          content="맨투맨 제작이 완료되면 담당매니저 확인하여 바로 배송해드립니다.
              위브웍스의 모든 주문은 무료배송으로 이루어집니다 (평균 생산리드타임
              3주)"
        />
      </div>

      <Spacer size={4} />

      <button className="hover:bg-white hover:text-black py-2 px-4 text-white border border-white rounded-full">
        더 알아보기
      </button>
    </section>
  );
};

export default Why;

const Content = ({ title, content }: any) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-4xl font-bold">{title}</div>
      <div className="w-[70%]">{content}</div>
    </div>
  );
};
