import Breadcrumb from "@/components/Common/Breadcrumb";

const ProductSpecs = () => {
  return (
    <>
      <Breadcrumb
        pageName="제품 사양"
        description="유진파워시스템 제품들의 기술적 사양을 확인하세요."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  제품 사양
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  제품별 기술 사양
                </h2>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl sm:leading-relaxed">
                  유진파워시스템의 모든 제품은 국제 표준을 준수하며, 최고의 품질과 신뢰성을 보장합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-dark-2 rounded-lg overflow-hidden">
                  <thead className="bg-primary">
                    <tr>
                      <th className="py-4 px-6 text-left text-white font-semibold">제품명</th>
                      <th className="py-4 px-6 text-left text-white font-semibold">모델</th>
                      <th className="py-4 px-6 text-left text-white font-semibold">입력 전압</th>
                      <th className="py-4 px-6 text-left text-white font-semibold">출력 전압</th>
                      <th className="py-4 px-6 text-left text-white font-semibold">효율</th>
                      <th className="py-4 px-6 text-left text-white font-semibold">규격</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {specsList.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        <td className="py-4 px-6 text-dark dark:text-white">{spec.name}</td>
                        <td className="py-4 px-6 text-dark dark:text-white">{spec.model}</td>
                        <td className="py-4 px-6 text-dark dark:text-white">{spec.inputVoltage}</td>
                        <td className="py-4 px-6 text-dark dark:text-white">{spec.outputVoltage}</td>
                        <td className="py-4 px-6 text-dark dark:text-white">{spec.efficiency}</td>
                        <td className="py-4 px-6 text-dark dark:text-white">{spec.dimensions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12">
                <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  인증 및 규격
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-body-color dark:text-body-color-dark">
                  <li>IEC 61000-4-1: 전자파 호환성(EMC) - 테스트 및 측정 기술</li>
                  <li>ISO 9001: 품질 관리 시스템</li>
                  <li>ISO 14001: 환경 관리 시스템</li>
                  <li>ISO 45001: 안전 보건 경영시스템</li>
                  <li>CE 인증: 유럽 표준 인증</li>
                  <li>UL 인증: 미국 안전 표준 인증</li>
                  <li>KC 인증: 한국 안전 인증</li>
                </ul>
              </div>

              <div className="mt-12">
                <p className="text-body-color dark:text-body-color-dark">
                  더 자세한 제품 사양이나 기술 정보가 필요하시면{" "}
                  <a
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    문의하기
                  </a>{" "}
                  페이지를 통해 연락 주시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// 임시 제품 사양 데이터
const specsList = [
  {
    name: "전력 변압기",
    model: "YJ-PT1000",
    inputVoltage: "220V / 380V / 440V",
    outputVoltage: "110V / 220V / 380V",
    efficiency: "98.5%",
    dimensions: "1200mm x 800mm x 1500mm"
  },
  {
    name: "전력 변압기",
    model: "YJ-PT2000",
    inputVoltage: "220V / 380V / 440V",
    outputVoltage: "110V / 220V / 380V",
    efficiency: "99.0%",
    dimensions: "1500mm x 1000mm x 1800mm"
  },
  {
    name: "차단기",
    model: "YJ-CB100",
    inputVoltage: "220V / 380V",
    outputVoltage: "220V / 380V",
    efficiency: "99.8%",
    dimensions: "600mm x 400mm x 200mm"
  },
  {
    name: "차단기",
    model: "YJ-CB200",
    inputVoltage: "380V / 440V",
    outputVoltage: "380V / 440V",
    efficiency: "99.9%",
    dimensions: "800mm x 600mm x 300mm"
  },
  {
    name: "스위치기어",
    model: "YJ-SG500",
    inputVoltage: "1kV ~ 36kV",
    outputVoltage: "1kV ~ 36kV",
    efficiency: "99.5%",
    dimensions: "2000mm x 1000mm x 2200mm"
  },
  {
    name: "보호 계전기",
    model: "YJ-PR300",
    inputVoltage: "110V / 220V",
    outputVoltage: "N/A",
    efficiency: "99.7%",
    dimensions: "300mm x 200mm x 150mm"
  }
];

export default ProductSpecs; 