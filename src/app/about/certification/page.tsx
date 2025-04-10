import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인증서 | 유진파워시스템",
  description: "유진파워시스템이 보유한 국내외 인증서 및 특허 정보를 소개합니다.",
};

const CertificationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="인증서"
        description="유진파워시스템은 최고의 품질과 안전성을 보장하기 위해 국내외 다양한 인증을 획득하고 있습니다."
      />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-12">
                <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  품질 인증
                </h2>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="ISO 9001 인증서"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          ISO 9001:2015
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          품질경영시스템 국제 표준 인증<br />
                          인증 기관: TÜV Rheinland<br />
                          취득일: 2003년 05월<br />
                          갱신일: 2021년 05월
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="ISO 14001 인증서"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          ISO 14001:2015
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          환경경영시스템 국제 표준 인증<br />
                          인증 기관: TÜV Rheinland<br />
                          취득일: 2012년 10월<br />
                          갱신일: 2021년 10월
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="ISO 45001 인증서"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          ISO 45001:2018
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          안전보건경영시스템 국제 표준 인증<br />
                          인증 기관: TÜV Rheinland<br />
                          취득일: 2019년 03월<br />
                          갱신일: 2022년 03월
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  제품 인증
                </h2>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="CE 인증"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          CE 인증
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          유럽 제품 안전 인증<br />
                          인증 범위: 전력 변환 장치 시리즈<br />
                          취득일: 2015년 07월
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="UL 인증"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          UL 인증
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          미국 안전 규격 인증<br />
                          인증 범위: 전력 제어 시스템<br />
                          취득일: 2017년 04월
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="KC 인증"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          KC 인증
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          한국 제품 안전 인증<br />
                          인증 범위: 전체 제품군<br />
                          취득일: 2010년 09월
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  특허 및 기술
                </h2>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="특허 1"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          전력 변환 장치 (특허 제10-1234567호)
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          고효율 전력 변환 기술<br />
                          출원일: 2015년 03월<br />
                          등록일: 2016년 05월
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="특허 2"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          에너지 저장 시스템 (특허 제10-7654321호)
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          고용량 배터리 관리 기술<br />
                          출원일: 2019년 06월<br />
                          등록일: 2020년 08월
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                    <div className="mb-10">
                      <div className="mb-5 overflow-hidden rounded-md">
                        <Image
                          src="/images/logo/youjin-power-logo.svg"
                          alt="특허 3"
                          width={400}
                          height={300}
                          className="w-full transition hover:scale-105 dark:invert"
                        />
                      </div>
                      <div>
                        <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                          스마트 그리드 제어 시스템 (특허 제10-9876543호)
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          지능형 전력망 관리 기술<br />
                          출원일: 2021년 01월<br />
                          등록일: 2022년 03월
                        </p>
                      </div>
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

export default CertificationPage; 