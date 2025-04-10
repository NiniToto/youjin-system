import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 소개 - 유진 파워 시스템",
  description: "유진 파워 시스템의 다양한 제품들을 소개합니다.",
};

export default function Products({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const { category } = searchParams;

  const products = [
    {
      id: 1,
      title: "전력제어 시스템",
      category: "1",
      image: "/images/products/product-1.jpg",
      description: "고효율 전력 제어 시스템으로 안정적인 전력 공급을 보장합니다.",
    },
    {
      id: 2,
      title: "자동화 솔루션",
      category: "2",
      image: "/images/products/product-2.jpg",
      description: "산업 현장의 자동화를 위한 최적의 솔루션을 제공합니다.",
    },
    {
      id: 3,
      title: "전력 변환장치",
      category: "3",
      image: "/images/products/product-3.jpg",
      description: "높은 효율의 전력 변환장치로 에너지 손실을 최소화합니다.",
    },
    {
      id: 4,
      title: "배전반 시스템",
      category: "4",
      image: "/images/products/product-4.jpg",
      description: "안전하고 효율적인 전력 분배를 위한 배전 시스템입니다.",
    },
    {
      id: 5,
      title: "에너지 관리 시스템",
      category: "5",
      image: "/images/products/product-5.jpg",
      description: "실시간 모니터링과 최적화를 통한 에너지 관리 솔루션입니다.",
    },
    {
      id: 6,
      title: "스마트 그리드 솔루션",
      category: "6",
      image: "/images/products/product-6.jpg",
      description: "미래 전력망을 위한 스마트 그리드 기술을 제공합니다.",
    },
    {
      id: 7,
      title: "태양광 발전 시스템",
      category: "1",
      image: "/images/products/product-7.jpg",
      description: "친환경 에너지 생산을 위한 태양광 발전 시스템입니다.",
    },
    {
      id: 8,
      title: "풍력 발전 시스템",
      category: "1",
      image: "/images/products/product-8.jpg",
      description: "자연 에너지를 활용한 효율적인 풍력 발전 시스템입니다.",
    },
    {
      id: 9,
      title: "에너지 저장 시스템",
      category: "5",
      image: "/images/products/product-9.jpg",
      description: "안정적인 전력 공급을 위한 에너지 저장 시스템입니다.",
    },
  ];

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const getCategoryName = (categoryId) => {
    switch (categoryId) {
      case "1":
        return "제품군 1";
      case "2":
        return "제품군 2";
      case "3":
        return "제품군 3";
      case "4":
        return "제품군 4";
      case "5":
        return "제품군 5";
      case "6":
        return "기타";
      default:
        return "전체 제품";
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="제품 소개"
        description="유진 파워 시스템의 제품들을 소개합니다."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
              {getCategoryName(category)}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className={`rounded-md px-4 py-2 text-base ${
                  !category
                    ? "bg-primary text-white"
                    : "bg-primary/10 hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white"
                }`}
              >
                전체 보기
              </Link>
              {[1, 2, 3, 4, 5, 6].map((categoryId) => (
                <Link
                  key={categoryId}
                  href={`/products?category=${categoryId}`}
                  className={`rounded-md px-4 py-2 text-base ${
                    category === String(categoryId)
                      ? "bg-primary text-white"
                      : "bg-primary/10 hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white"
                  }`}
                >
                  {getCategoryName(String(categoryId))}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg dark:bg-gray-dark"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {product.title}
                </h3>
                <p className="text-body-color mb-5 text-base dark:text-body-color-dark">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  자세히 보기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 