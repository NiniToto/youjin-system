"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function Notice() {
  const notices = [
    {
      id: 1,
      title: "유진 파워 시스템 신제품 출시 안내",
      date: "2023-12-15",
      views: 248,
    },
    {
      id: 2,
      title: "2023년 하반기 기술 세미나 개최 안내",
      date: "2023-11-20",
      views: 175,
    },
    {
      id: 3,
      title: "유진 파워 시스템 서비스 이용 안내",
      date: "2023-10-05",
      views: 321,
    },
    {
      id: 4,
      title: "홈페이지 리뉴얼 안내",
      date: "2023-09-18",
      views: 156,
    },
    {
      id: 5,
      title: "유진 파워 시스템 신규 채용 공고",
      date: "2023-08-22",
      views: 289,
    },
    {
      id: 6,
      title: "여름철 전력 설비 관리 가이드",
      date: "2023-07-10",
      views: 178,
    },
    {
      id: 7,
      title: "유진 파워 시스템 A/S 안내",
      date: "2023-06-25",
      views: 221,
    },
    {
      id: 8,
      title: "2023년 상반기 정기 세미나 결과 보고",
      date: "2023-05-30",
      views: 142,
    },
    {
      id: 9,
      title: "제품 사용 설명서 업데이트 안내",
      date: "2023-04-15",
      views: 203,
    },
    {
      id: 10,
      title: "중소기업 정부지원사업 설명회 안내",
      date: "2023-03-20",
      views: 167,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5;

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 페이지네이션 계산
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = filteredNotices.slice(
    indexOfFirstNotice,
    indexOfLastNotice
  );
  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Breadcrumb
        pageName="공지사항"
        description="유진 파워 시스템의 공지사항을 확인해보세요."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            {/* 검색 폼 */}
            <div className="mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="공지사항 검색..."
                  className="w-full rounded-lg border border-body-color/10 bg-white px-6 py-3 pr-12 text-base text-dark outline-none focus:border-primary dark:border-white/[.15] dark:bg-gray-dark dark:text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="#202232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-dark dark:stroke-white"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 공지사항 목록 */}
            <div className="mb-8 rounded-lg bg-white shadow-md dark:bg-gray-dark">
              <div className="flex items-center border-b border-body-color/[.15] px-8 py-4 dark:border-white/[.15]">
                <div className="w-9/12 pr-4 text-left font-medium text-dark dark:text-white">
                  제목
                </div>
                <div className="w-2/12 pr-4 text-center font-medium text-dark dark:text-white">
                  날짜
                </div>
                <div className="w-1/12 text-center font-medium text-dark dark:text-white">
                  조회수
                </div>
              </div>

              {currentNotices.length > 0 ? (
                currentNotices.map((notice, index) => (
                  <div
                    key={notice.id}
                    className={`flex cursor-pointer items-center px-8 py-4 hover:bg-primary/[.03] ${
                      index !== currentNotices.length - 1
                        ? "border-b border-body-color/[.15] dark:border-white/[.15]"
                        : ""
                    }`}
                  >
                    <div className="w-9/12 pr-4 text-left">
                      <Link
                        href={`/notice/${notice.id}`}
                        className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                      >
                        {notice.title}
                      </Link>
                    </div>
                    <div className="w-2/12 pr-4 text-center text-sm text-body-color dark:text-body-color-dark">
                      {notice.date}
                    </div>
                    <div className="w-1/12 text-center text-sm text-body-color dark:text-body-color-dark">
                      {notice.views}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-8 py-8 text-center text-body-color dark:text-body-color-dark">
                  검색 결과가 없습니다
                </div>
              )}
            </div>

            {/* 페이지네이션 */}
            {filteredNotices.length > 0 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex h-9 w-9 items-center justify-center rounded-md border border-body-color/[.15] dark:border-white/[.15] ${
                    currentPage === 1
                      ? "cursor-not-allowed opacity-50"
                      : "hover:border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    className="fill-current"
                  >
                    <path d="M7.35059 13.3499C7.54294 13.1575 7.64876 12.8952 7.64876 12.6213C7.64876 12.3474 7.54294 12.085 7.35059 11.8927L2.97559 7.49988L7.35059 3.10692C7.54291 2.91455 7.64871 2.65216 7.64869 2.37827C7.64868 2.10438 7.54285 1.842 7.35051 1.64964C7.15816 1.45729 6.89578 1.35149 6.62188 1.3515C6.34799 1.35152 6.08561 1.45735 5.89326 1.6497L0.649261 6.9137C0.45691 7.10604 0.351089 7.36842 0.351089 7.64235C0.351089 7.91628 0.45691 8.17866 0.649261 8.371L5.89326 13.635C6.0856 13.8274 6.34799 13.9332 6.62192 13.9332C6.89585 13.9332 7.15825 13.8274 7.35059 13.635V13.3499Z" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`flex h-9 w-9 items-center justify-center rounded-md border ${
                      currentPage === index + 1
                        ? "border-primary bg-primary text-white"
                        : "border-body-color/[.15] hover:border-primary hover:bg-primary hover:text-white dark:border-white/[.15]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex h-9 w-9 items-center justify-center rounded-md border border-body-color/[.15] dark:border-white/[.15] ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : "hover:border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    className="fill-current"
                  >
                    <path d="M0.650879 0.650098C0.458533 0.842444 0.352707 1.10483 0.352707 1.3787C0.352707 1.65257 0.458533 1.91496 0.650879 2.10731L5.02588 6.50026L0.650879 10.8932C0.458559 11.0856 0.352756 11.348 0.35277 11.6219C0.352783 11.8958 0.458615 12.1582 0.650963 12.3505C0.843311 12.5429 1.10569 12.6487 1.37959 12.6487C1.65348 12.6487 1.91587 12.5428 2.10822 12.3505L7.35222 7.08646C7.54457 6.89412 7.65039 6.63174 7.65039 6.35781C7.65039 6.08388 7.54457 5.8215 7.35222 5.62916L2.10822 0.365159C1.91588 0.172813 1.65349 0.0669861 1.37956 0.0669861C1.10563 0.0669861 0.843232 0.172813 0.650879 0.365159V0.650098Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 