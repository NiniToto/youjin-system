import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사 연혁 | 유진파워시스템",
  description: "유진파워시스템의 설립부터 현재까지의 발자취와 주요 성과를 소개합니다.",
};

const HistoryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="회사 연혁"
        description="유진파워시스템의 설립부터 현재까지의 발자취와 주요 성과를 소개합니다."
      />
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="relative">
                {/* 2020년대 */}
                <div className="mb-16 lg:mb-20">
                  <h2 className="mb-10 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                    2020년대
                  </h2>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2023</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        글로벌 시장 진출 확대
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        유럽 및 동남아시아 시장 진출 확대
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        국내 5개 지사 추가 설립
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2022</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        친환경 전력 솔루션 출시
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        친환경 에너지 저장 시스템 개발 및 출시
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        연매출 1000억 달성
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2020</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        기업 부설 연구소 확장
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        R&D 센터 확장 이전
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        스마트 그리드 기술 개발 착수
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2010년대 */}
                <div className="mb-16 lg:mb-20">
                  <h2 className="mb-10 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                    2010년대
                  </h2>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2018</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        중국 합작 법인 설립
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        중국 상하이에 생산 공장 설립
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2015</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        코스닥 상장
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        한국거래소 코스닥 시장 상장
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        전력 변환 장치 개발 및 특허 등록
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2012</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        제2공장 설립
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        경기도 화성에 제2공장 설립
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        ISO 14001 인증 획득
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2000년대 */}
                <div className="mb-16 lg:mb-20">
                  <h2 className="mb-10 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                    2000년대
                  </h2>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2008</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        기업 부설 연구소 설립
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        R&D 센터 설립 및 연구 개발 강화
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2003</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        ISO 9001 인증 획득
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        품질 경영 시스템 국제 표준 인증 취득
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">2000</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        본사 이전
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        서울 강남구로 본사 이전
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        전력 제어 시스템 개발 완료
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1990년대 */}
                <div>
                  <h2 className="mb-10 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                    1990년대
                  </h2>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-[''] mb-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">1998</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        첫 해외 수출
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        일본 시장으로 첫 수출 성공
                      </p>
                    </div>
                  </div>
                  <div className="relative pl-8 sm:pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30 before:content-['']">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary -translate-x-1/2">
                      <span className="text-white text-sm font-bold">1995</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                        유진파워시스템 설립
                      </h3>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        김유진 대표이사에 의해 설립
                      </p>
                      <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                        경기도 부천에 첫 생산 공장 설립
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

export default HistoryPage; 