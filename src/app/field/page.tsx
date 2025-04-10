"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function Field() {
  const [selectedImage, setSelectedImage] = useState(null);

  const fieldImages = [
    {
      id: 1,
      src: "/images/field/field-1.jpg",
      alt: "전력 시스템 설치 현장",
    },
    {
      id: 2,
      src: "/images/field/field-2.jpg",
      alt: "제어 패널 설치 작업",
    },
    {
      id: 3,
      src: "/images/field/field-3.jpg",
      alt: "전력 변환장치 유지보수",
    },
    {
      id: 4,
      src: "/images/field/field-4.jpg",
      alt: "배전반 시스템 점검",
    },
    {
      id: 5,
      src: "/images/field/field-5.jpg",
      alt: "에너지 관리 시스템 구축",
    },
    {
      id: 6,
      src: "/images/field/field-6.jpg",
      alt: "스마트 그리드 시스템 설치",
    },
    {
      id: 7,
      src: "/images/field/field-7.jpg",
      alt: "태양광 발전 시스템 설치",
    },
    {
      id: 8,
      src: "/images/field/field-8.jpg",
      alt: "풍력 발전 시스템 구축",
    },
    {
      id: 9,
      src: "/images/field/field-9.jpg",
      alt: "에너지 저장 시스템 현장",
    },
    {
      id: 10,
      src: "/images/field/field-10.jpg",
      alt: "전력 시스템 유지보수 작업",
    },
    {
      id: 11,
      src: "/images/field/field-11.jpg",
      alt: "안전 점검 현장",
    },
    {
      id: 12,
      src: "/images/field/field-12.jpg",
      alt: "신규 설비 설치 현장",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Breadcrumb
        pageName="현장 갤러리"
        description="유진 파워 시스템의 다양한 현장 이미지를 확인하세요."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {fieldImages.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-md shadow-md"
                onClick={() => openModal(image)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <path
                          d="M15.8333 15.8333L12.5 12.5M8.33333 4.16667C11.555 4.16667 14.1667 6.77834 14.1667 10C14.1667 13.2217 11.555 15.8333 8.33333 15.8333C5.11167 15.8333 2.5 13.2217 2.5 10C2.5 6.77834 5.11167 4.16667 8.33333 4.16667ZM17.5 17.5L12.5 12.5L17.5 17.5Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 dark:bg-gray-dark">
                  <h3 className="text-base font-medium text-dark dark:text-white">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
              onClick={closeModal}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="relative h-auto w-auto max-w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
              />
              <div className="mt-4 bg-white/10 p-4 text-white">
                <h3 className="text-lg font-medium">{selectedImage.alt}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}