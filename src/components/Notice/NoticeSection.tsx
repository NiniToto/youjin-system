"use client";

import { useState } from "react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const NoticeSection = () => {
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
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="notice" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="공지사항"
          paragraph="유진 파워 시스템의 최신 소식을 확인하세요."
          center
          mb="50px"
        />

        {/* 검색 폼 */}
        <div className="mx-auto mb-10 max-w-[700px]">
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
        <div className="mx-auto max-w-[1000px]">
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

            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice, index) => (
                <div
                  key={notice.id}
                  className={`flex cursor-pointer items-center px-8 py-4 hover:bg-primary/[.03] ${
                    index !== filteredNotices.length - 1
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
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/notice"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white transition-all hover:bg-primary/90"
          >
            모든 공지사항 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection; 