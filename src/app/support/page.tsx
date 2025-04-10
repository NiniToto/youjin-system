import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객지원 | 유진파워시스템",
  description: "유진파워시스템의 고객지원 페이지입니다. 기술 지원, 문의사항, FAQ 및 자료실을 이용하실 수 있습니다.",
};

const SupportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="고객지원"
        description="유진파워시스템은 고객만족을 최우선으로 생각합니다. 제품 문의, 기술 지원, A/S 신청 등 궁금하신 사항이 있으시면 언제든지 문의해 주세요."
      />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-12 rounded-md bg-white p-8 shadow-md dark:bg-dark sm:p-12 lg:px-8 xl:px-12">
                <h3 className="mb-8 text-xl font-semibold text-black dark:text-white sm:text-2xl">
                  자주 묻는 질문 (FAQ)
                </h3>
                <div className="mb-10">
                  <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                    Q: 제품 보증 기간은 얼마인가요?
                  </h4>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    모든 제품은 구매일로부터 1년간 보증됩니다. 자세한 내용은 제품별 보증서를 확인하시거나 고객센터로 문의해 주세요.
                  </p>
                </div>
                <div className="mb-10">
                  <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                    Q: A/S 신청은 어떻게 하나요?
                  </h4>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    전화(02-1234-5678) 또는 이메일(support@youjin-power.com)을 통해 A/S 접수가 가능합니다. 
                    제품명, 구매일자, 증상을 자세히 알려주시면 신속하게 처리해 드립니다.
                  </p>
                </div>
                <div className="mb-10">
                  <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                    Q: 기술 지원을 받고 싶습니다.
                  </h4>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    기술 지원은 평일 오전 9시부터 오후 6시까지 가능합니다. 
                    연락처: 02-1234-5678, 이메일: tech@youjin-power.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage; 