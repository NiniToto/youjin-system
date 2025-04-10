"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("greeting");

  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  const milestones = [
    {
      year: "2023",
      events: ["국내 전력제어 시스템 공급 계약 체결", "해외 수출 파트너십 확대"],
    },
    {
      year: "2022",
      events: ["신제품 라인업 확장", "매출 200억 달성", "업계 리더십 상 수상"],
    },
    {
      year: "2020",
      events: ["연구개발센터 설립", "품질경영시스템 인증 획득"],
    },
    {
      year: "2018",
      events: ["유진 파워 시스템 설립", "첫 제품 라인 출시"],
    },
  ];

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title="회사소개"
            paragraph="유진 파워 시스템은 최고의 품질과 기술력으로 전력계통 관련 제품을 개발 및 공급하는 전문기업입니다."
            center
            mb="44px"
          />

          <div className="mb-8 flex flex-wrap">
            <div className="w-full">
              <div className="mb-10 flex flex-wrap border-b border-body-color/[.15] pb-2 dark:border-white/[.15]">
                <button
                  onClick={() => setActiveTab("greeting")}
                  className={`mr-3 mb-3 rounded-md bg-primary/[.08] px-5 py-2 text-base font-medium transition hover:bg-primary hover:text-white dark:hover:bg-primary ${
                    activeTab === "greeting" ? "bg-primary text-white" : ""
                  }`}
                >
                  인사말
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`mr-3 mb-3 rounded-md bg-primary/[.08] px-5 py-2 text-base font-medium transition hover:bg-primary hover:text-white dark:hover:bg-primary ${
                    activeTab === "history" ? "bg-primary text-white" : ""
                  }`}
                >
                  회사 연혁
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`mr-3 mb-3 rounded-md bg-primary/[.08] px-5 py-2 text-base font-medium transition hover:bg-primary hover:text-white dark:hover:bg-primary ${
                    activeTab === "vision" ? "bg-primary text-white" : ""
                  }`}
                >
                  비전
                </button>
                <button
                  onClick={() => setActiveTab("certification")}
                  className={`mr-3 mb-3 rounded-md bg-primary/[.08] px-5 py-2 text-base font-medium transition hover:bg-primary hover:text-white dark:hover:bg-primary ${
                    activeTab === "certification" ? "bg-primary text-white" : ""
                  }`}
                >
                  인증서
                </button>
              </div>
            </div>
          </div>

          {activeTab === "greeting" && (
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    안녕하십니까, 유진 파워 시스템입니다.
                  </h3>
                  <p className="text-body-color mb-9 text-base leading-relaxed dark:text-body-color-dark">
                    유진 파워 시스템은 전력계통 관련 제품의 개발 및 공급을 통해
                    고객의 사업 성공에 기여하고자 합니다. 저희는 최고의 품질과
                    기술력을 바탕으로 고객이 만족할 수 있는 제품을 제공하기 위해
                    항상 노력하고 있습니다.
                  </p>
                  <p className="text-body-color text-base leading-relaxed dark:text-body-color-dark">
                    앞으로도 지속적인 연구개발과 혁신을 통해 전력계통 산업의
                    발전에 기여하고, 고객의 신뢰를 얻는 기업이 되도록
                    노력하겠습니다. 감사합니다.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <Image
                    src="/images/about/ceo.jpg"
                    alt="대표이사 인사말"
                    fill
                    className="mx-auto max-w-full rounded-md object-cover drop-shadow-three lg:mr-0"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="relative mx-auto max-w-[800px]">
              <div className="absolute left-8 top-0 h-full w-[2px] bg-primary/20"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative mb-12 pl-[50px]"
                >
                  <div className="absolute left-0 top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    {milestone.year}
                  </div>
                  <div className="rounded-lg bg-white/5 p-6 shadow-md dark:bg-gray-dark">
                    <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                      {milestone.year}
                    </h4>
                    <ul className="text-body-color dark:text-body-color-dark">
                      {milestone.events.map((event, idx) => (
                        <li key={idx} className="mb-2">
                          • {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "vision" && (
            <div className="mx-auto max-w-[800px] text-center">
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  유진 파워 시스템의 비전
                </h3>
                <p className="text-body-color text-lg dark:text-body-color-dark">
                  "전력계통 산업의 미래를 선도하는 글로벌 기업"
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-md bg-white p-8 shadow-md dark:bg-gray-dark">
                  <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                    기술 혁신
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    지속적인 연구개발을 통한 기술 혁신 추구
                  </p>
                </div>
                <div className="rounded-md bg-white p-8 shadow-md dark:bg-gray-dark">
                  <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                    품질 경영
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    최고의 품질을 통한 고객 만족 실현
                  </p>
                </div>
                <div className="rounded-md bg-white p-8 shadow-md dark:bg-gray-dark">
                  <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                    글로벌 경쟁력
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    세계 시장에서 인정받는 글로벌 기업으로 성장
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "certification" && (
            <div className="mx-auto max-w-[800px]">
              <div className="mb-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  인증서
                </h3>
                <p className="text-body-color text-base dark:text-body-color-dark">
                  유진 파워 시스템은 다양한 품질 인증을 통해 제품의 신뢰성을
                  보장합니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-md">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/about/certification1.jpg"
                      alt="품질경영시스템 인증서"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-white p-4 dark:bg-gray-dark">
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      ISO 9001 품질경영시스템 인증
                    </h4>
                  </div>
                </div>
                <div className="overflow-hidden rounded-md">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/about/certification2.jpg"
                      alt="기술 인증서"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-white p-4 dark:bg-gray-dark">
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      기술혁신형 중소기업 인증
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 