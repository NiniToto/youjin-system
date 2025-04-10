import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "비전 | 유진파워시스템",
  description: "유진파워시스템의 경영이념, 비전, 핵심가치를 소개합니다.",
};

const VisionPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="비전"
        description="유진파워시스템의 경영이념과 비전, 핵심가치를 소개합니다."
      />

      {/* 경영이념 섹션 */}
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-12 rounded-md bg-primary/[.03] p-8 dark:bg-dark sm:p-10 lg:px-8 xl:px-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    경영이념
                  </h2>
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8 text-center">
                      <div className="mx-auto mb-6 h-20 w-20 text-center">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="고객중심 아이콘"
                          width={80}
                          height={80}
                          className="mx-auto rounded-full dark:invert"
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        고객중심
                      </h3>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        고객의 요구를 최우선으로 생각하며, 최고의 제품과 서비스를 제공합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8 text-center">
                      <div className="mx-auto mb-6 h-20 w-20 text-center">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="기술혁신 아이콘"
                          width={80}
                          height={80}
                          className="mx-auto rounded-full dark:invert"
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        기술혁신
                      </h3>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        끊임없는 연구와 기술 개발을 통해 업계를 선도하는 혁신적인 솔루션을 제공합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8 text-center">
                      <div className="mx-auto mb-6 h-20 w-20 text-center">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="윤리경영 아이콘"
                          width={80}
                          height={80}
                          className="mx-auto rounded-full dark:invert"
                        />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        윤리경영
                      </h3>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        모든 이해관계자와의 관계에서 공정함과 투명성을 바탕으로 신뢰받는 기업이 됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 비전 섹션 */}
      <section className="pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-12 rounded-md bg-white p-8 shadow-md dark:bg-dark sm:p-10 lg:px-8 xl:px-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    비전 2030
                  </h2>
                  <p className="mt-4 text-xl text-body-color dark:text-body-color-dark">
                    "글로벌 톱 10 전력 솔루션 기업"
                  </p>
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-8">
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        목표 1. 지속가능한 성장
                      </h3>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        2030년까지 매출 1조원 달성과 글로벌 시장 점유율 10% 확보를 목표로 합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-8">
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        목표 2. 기술 선도
                      </h3>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        연간 매출의 10%를 R&D에 투자하여 핵심 기술 개발과 특허 포트폴리오를 확장합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-8">
                      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                        목표 3. 글로벌 확장
                      </h3>
                      <p className="text-base text-body-color dark:text-body-color-dark">
                        해외 매출 비중 70% 달성 및 글로벌 생산 네트워크 확대를 추진합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심가치 섹션 */}
      <section className="pb-20 lg:pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="rounded-md bg-primary/[.03] p-8 dark:bg-dark sm:p-10 lg:px-8 xl:px-10">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    핵심가치
                  </h2>
                </div>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                          <span className="font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white">
                          열정 (Passion)
                        </h3>
                      </div>
                      <p className="pl-14 text-base text-body-color dark:text-body-color-dark">
                        모든 일에 열정을 다하며, 끊임없는 도전 정신으로 성장합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                          <span className="font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white">
                          혁신 (Innovation)
                        </h3>
                      </div>
                      <p className="pl-14 text-base text-body-color dark:text-body-color-dark">
                        창의적 사고와 도전 정신으로 새로운 가치를 창출합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                          <span className="font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white">
                          신뢰 (Trust)
                        </h3>
                      </div>
                      <p className="pl-14 text-base text-body-color dark:text-body-color-dark">
                        모든 이해관계자와의 약속을 지키고, 정직과 성실을 바탕으로 신뢰를 구축합니다.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                          <span className="font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white">
                          전문성 (Excellence)
                        </h3>
                      </div>
                      <p className="pl-14 text-base text-body-color dark:text-body-color-dark">
                        최고의 품질과 전문성을 바탕으로 고객에게 최상의 가치를 제공합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionPage; 