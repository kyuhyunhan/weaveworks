import * as React from "react";
import Spacer from "../Spacer";
import review_small from "@assets/images/review_small.png";
import review_clean from "@assets/images/review_clean.png";
import review_first from "@assets/images/review_first.png";

const ReviewAndCta = () => {
  return (
    <section className="w-full bg-white rounded-t-3xl px-10 py-16 border-b-2 border-b-gray-100">
      <div className="flex flex-col gap-2 text-3xl font-bold">
        <p className="text-center">고객들이 경험한 위브웍스</p>
      </div>

      <Spacer size={10} />

      <div className="flex flex-col gap-6">
        <Review
          title="소량생산이 가능한 곳"
          content="다른 업체를 여러군데를 찾아봤지만 여기만한 곳이 없더라구요 소량 도 소량인데 가격이 진짜 착했어요 그리고 무엇보다 퀄리티도 좋아서 더 마음에 들구요."
          image={review_small}
        />

        <Review
          title="깔끔하게 배송 받았어요."
          content="사실 처음에 샘플 드리고 원단 고르고 정말 이게 생산이 되는걸까 싶었 지만 담당 매니저분께서 너무나도 친절하게 해주셔서 원하는 디자인 티셔츠 잘 받았어요 :D"
          image={review_clean}
          reverseOrder
        />

        <Review
          title="떨리는 첫 주문제작"
          content="원단을 여러번 교체했지만 친절하게 소통해주셔서 원하는 느낌의 디 자인 옷을 잘 받았어요 다음에도 또 이용하려구요."
          image={review_first}
        />
      </div>

      <Spacer size={10} />

      <div className="flex flex-col gap-6 bg-black rounded-3xl w-full py-10 px-9">
        <div className="text-[#7f63f9] text-md">위브웍스 시작하기</div>

        <div className="text-3xl font-bold text-white">
          <p>의류의 새로운 혁신</p>
          <p className="mt-2">위브웍스를만나보세요</p>
        </div>

        <div className="text-[#8D8D93]">
          버튼을 클릭하시면 주문선택 창으로 이동됩니다
        </div>

        <button className="hover:bg-[#9b84ff] bg-[#7a5df7] py-2 px-4 text-white rounded-xl">
          서비스 시작하기
        </button>
      </div>
    </section>
  );
};

export default ReviewAndCta;

const Review = ({ caption, title, content, image, reverseOrder }: any) => {
  return (
    <div className={`flex gap-8 ${reverseOrder ? "flex-row-reverse" : ""}`}>
      <img src={image} className="w-[50%] h-[300px] object-cover rounded-xl" />

      <div className="flex flex-col gap-2 justify-center">
        <div className="text-xl font-bold">{title}</div>

        <div className="text-[#8D8D93]">{content}</div>
      </div>
    </div>
  );
};
