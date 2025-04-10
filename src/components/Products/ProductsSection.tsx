"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="제품 소개"
          paragraph="유진 파워 시스템의 다양한 제품들을 소개합니다."
          center
          mb="50px"
        />

        <div className="mb-8 flex flex-wrap justify-center">
          <button
            onClick={() => setActiveCategory("all")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            전체 보기
          </button>
          <button
            onClick={() => setActiveCategory("1")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "1"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            제품군 1
          </button>
          <button
            onClick={() => setActiveCategory("2")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "2"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            제품군 2
          </button>
          <button
            onClick={() => setActiveCategory("3")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "3"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            제품군 3
          </button>
          <button
            onClick={() => setActiveCategory("4")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "4"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            제품군 4
          </button>
          <button
            onClick={() => setActiveCategory("5")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "5"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            제품군 5
          </button>
          <button
            onClick={() => setActiveCategory("6")}
            className={`m-2 rounded-md px-6 py-2 text-base font-medium transition ${
              activeCategory === "6"
                ? "bg-primary text-white"
                : "bg-primary/[.08] hover:bg-primary hover:text-white"
            }`}
          >
            기타
          </button>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-md bg-white p-4 shadow-md transition-all hover:shadow-lg dark:bg-gray-dark"
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

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white transition-all hover:bg-primary/90"
          >
            모든 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 