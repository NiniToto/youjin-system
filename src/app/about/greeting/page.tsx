import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인사말 | 유진파워시스템",
  description: "유진파워시스템의 인사말입니다. 고객 여러분께 드리는 유진파워시스템의 경영 철학과 비전을 소개합니다.",
};

const GreetingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="인사말"
        description="유진파워시스템을 방문해 주셔서 감사합니다. 고객 여러분께 드리는 인사말입니다."
      />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <Image
                  src="/images/logo/youjin-power-logo.svg"
                  alt="유진파워시스템 대표이사"
                  width={540}
                  height={400}
                  className="object-cover object-center rounded-md dark:invert"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  안녕하십니까, <br /> 유진파워시스템 대표이사 김유진입니다.
                </h2>
                <p className="mb-6 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  유진파워시스템을 찾아주신 고객 여러분께 진심으로 감사드립니다.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  저희 유진파워시스템은 1995년 설립 이래로 전력 시스템 분야에서 혁신적인 솔루션을 제공하며 
                  국내외 시장에서 신뢰받는 기업으로 성장해 왔습니다. 
                  우리는 항상 고객의 니즈를 최우선으로 생각하며, 최고 품질의 제품과 서비스를 제공하기 위해 
                  지속적인 연구개발에 투자하고 있습니다.
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  앞으로도 유진파워시스템은 끊임없는 기술 혁신과 품질 향상을 통해 글로벌 시장에서 
                  경쟁력 있는 기업으로 성장해 나갈 것입니다. 
                  고객 여러분의 변함없는 성원과 관심을 부탁드립니다.
                </p>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  감사합니다.
                </p>
                <p className="mt-6 text-right font-semibold text-black dark:text-white">
                  유진파워시스템 대표이사 김유진
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreetingPage; 