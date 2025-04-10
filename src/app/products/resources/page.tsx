import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ProductResources = () => {
  return (
    <>
      <Breadcrumb
        pageName="제품 자료"
        description="유진파워시스템 제품의 자료를 다운로드하세요."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  제품 자료
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  제품 관련 자료실
                </h2>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl sm:leading-relaxed">
                  유진파워시스템의 제품 카탈로그, 매뉴얼, 기술 자료를 다운로드할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  최신 카탈로그
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {catalogs.map((catalog, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
                    >
                      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                        <div className="mb-6 h-[200px] w-full overflow-hidden rounded bg-[#F8F8F8] dark:bg-dark flex items-center justify-center">
                          <Image
                            src="/images/logo/youjin-power-logo.svg"
                            alt={catalog.title}
                            width={150}
                            height={150}
                            className="dark:invert"
                          />
                        </div>
                        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                          {catalog.title}
                        </h3>
                        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          {catalog.description}
                        </p>
                        <a
                          href="#"
                          className="inline-block rounded-md bg-primary py-3 px-7 text-base font-medium text-white transition hover:bg-primary/90"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("준비중입니다.");
                          }}
                        >
                          다운로드
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  기술 문서
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-dark-2 rounded-lg overflow-hidden">
                    <thead className="bg-primary">
                      <tr>
                        <th className="py-4 px-6 text-left text-white font-semibold">문서명</th>
                        <th className="py-4 px-6 text-left text-white font-semibold">설명</th>
                        <th className="py-4 px-6 text-left text-white font-semibold">형식</th>
                        <th className="py-4 px-6 text-left text-white font-semibold">크기</th>
                        <th className="py-4 px-6 text-left text-white font-semibold">다운로드</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {documents.map((doc, index) => (
                        <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                          <td className="py-4 px-6 text-dark dark:text-white">{doc.name}</td>
                          <td className="py-4 px-6 text-dark dark:text-white">{doc.description}</td>
                          <td className="py-4 px-6 text-dark dark:text-white">{doc.format}</td>
                          <td className="py-4 px-6 text-dark dark:text-white">{doc.size}</td>
                          <td className="py-4 px-6">
                            <a
                              href="#"
                              className="text-primary hover:underline"
                              onClick={(e) => {
                                e.preventDefault();
                                alert("준비중입니다.");
                              }}
                            >
                              다운로드
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  자료 요청
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-6">
                  원하시는 자료가 없거나 특정 제품에 대한 자세한 정보가 필요하시면, 아래 버튼을 클릭하여 요청해 주세요.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-primary py-3 px-7 text-base font-medium text-white transition hover:bg-primary/90"
                >
                  자료 요청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// 임시 카탈로그 데이터
const catalogs = [
  {
    title: "2023 종합 카탈로그",
    description: "유진파워시스템의 모든 제품 라인업을 담은 종합 카탈로그입니다.",
    file: "catalog-2023.pdf"
  },
  {
    title: "전력 변압기 카탈로그",
    description: "전력 변압기 제품군의 상세 정보와 기술 사양을 담은 카탈로그입니다.",
    file: "transformer-catalog.pdf"
  },
  {
    title: "스위치기어 카탈로그",
    description: "고압 및 저압 스위치기어 제품군의 상세 정보와 기술 사양입니다.",
    file: "switchgear-catalog.pdf"
  }
];

// 임시 기술 문서 데이터
const documents = [
  {
    name: "전력 변압기 설치 매뉴얼",
    description: "YJ-PT 시리즈 전력 변압기의 설치 및 운영 가이드",
    format: "PDF",
    size: "5.2MB",
    file: "transformer-manual.pdf"
  },
  {
    name: "차단기 기술 사양서",
    description: "YJ-CB 시리즈 차단기의 상세 기술 사양 및 특성",
    format: "PDF",
    size: "3.8MB",
    file: "circuit-breaker-specs.pdf"
  },
  {
    name: "스위치기어 사용자 가이드",
    description: "YJ-SG 시리즈 스위치기어의 사용자 가이드 및 유지보수 매뉴얼",
    format: "PDF",
    size: "7.1MB",
    file: "switchgear-guide.pdf"
  },
  {
    name: "보호 계전기 인증서",
    description: "YJ-PR 시리즈 보호 계전기의 품질 인증 및 테스트 리포트",
    format: "PDF",
    size: "2.5MB",
    file: "relay-certification.pdf"
  },
  {
    name: "제품 적용 사례집",
    description: "유진파워시스템 제품의 다양한 산업 적용 사례 모음",
    format: "PDF",
    size: "12.3MB",
    file: "case-studies.pdf"
  }
];

export default ProductResources; 