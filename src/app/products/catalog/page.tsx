import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ProductCatalog = () => {
  return (
    <>
      <Breadcrumb
        pageName="제품 카탈로그"
        description="유진파워시스템의 다양한 제품들을 소개합니다."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  제품 카탈로그
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  최고 품질의 전력 시스템 제품
                </h2>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl sm:leading-relaxed">
                  유진파워시스템의 제품들은 최고의 품질과 기술력으로 설계되었습니다.
                  다양한 제품들을 확인해보세요.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
              >
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <div className="mb-6 h-[220px] w-full overflow-hidden rounded">
                    <Image
                      src={product.image || "/images/logo/youjin-power-logo.svg"}
                      alt={product.title}
                      width={300}
                      height={220}
                      className="w-full object-cover object-center dark:invert"
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    {product.title}
                  </h3>
                  <p className="mb-7 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block rounded-md bg-primary py-3 px-7 text-base font-medium text-white transition hover:bg-primary/90"
                  >
                    자세히 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// 임시 제품 데이터
const products = [
  {
    id: "power-transformer-1",
    title: "전력 변압기 시리즈",
    description: "안정적인 전력 공급을 위한 고품질 변압기 시리즈입니다. 다양한 용량과 사양으로 제공됩니다.",
    image: "/images/logo/youjin-power-logo.svg"
  },
  {
    id: "circuit-breaker-1",
    title: "차단기 시스템",
    description: "과부하와 단락 보호를 위한 첨단 차단기 시스템입니다. 안전성과 내구성이 뛰어납니다.",
    image: "/images/logo/youjin-power-logo.svg"
  },
  {
    id: "switchgear-1",
    title: "스위치기어",
    description: "고압 및 저압 환경에서 사용 가능한 스위치기어입니다. 전력 분배와 제어를 위한 최적의 솔루션입니다.",
    image: "/images/logo/youjin-power-logo.svg"
  },
  {
    id: "protection-relay-1",
    title: "보호 계전기",
    description: "전력 시스템 보호를 위한 첨단 계전기입니다. 다양한 보호 기능이 통합되어 있습니다.",
    image: "/images/logo/youjin-power-logo.svg"
  },
  {
    id: "control-panel-1",
    title: "제어 패널",
    description: "전력 시스템의 효율적인 제어를 위한 패널입니다. 사용자 친화적 인터페이스를 제공합니다.",
    image: "/images/logo/youjin-power-logo.svg"
  },
  {
    id: "monitoring-system-1",
    title: "모니터링 시스템",
    description: "전력 시스템의 실시간 모니터링을 위한 첨단 시스템입니다. 원격 관리 기능을 제공합니다.",
    image: "/images/logo/youjin-power-logo.svg"
  }
];

export default ProductCatalog; 