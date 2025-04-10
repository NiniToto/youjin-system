import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { notFound } from "next/navigation";

// 더미 공지사항 데이터
const notices = [
  {
    id: 1,
    title: "유진 파워 시스템 신제품 출시 안내",
    date: "2023-12-15",
    views: 248,
    content: `안녕하세요, 유진 파워 시스템입니다.

저희 회사는 최신 기술을 적용한 신제품을 출시하게 되었습니다. 새롭게 출시된 제품은 기존 제품보다 효율성이 20% 향상되었으며, 에너지 소비량은 15% 감소하였습니다.

주요 특징:
- 효율성 20% 향상
- 에너지 소비량 15% 감소
- 사용자 친화적 인터페이스
- 원격 모니터링 기능 추가

자세한 내용은 제품 페이지에서 확인하실 수 있습니다. 궁금하신 점이 있으시면 언제든지 문의해주세요.

감사합니다.`,
    image: "/images/notice/notice-1.jpg",
  },
  {
    id: 2,
    title: "2023년 하반기 기술 세미나 개최 안내",
    date: "2023-11-20",
    views: 175,
    content: `안녕하세요, 유진 파워 시스템입니다.

2023년 하반기 기술 세미나를 다음과 같이 개최합니다.

- 일시: 2023년 12월 10일 오후 2시
- 장소: 서울 강남구 테헤란로 123 유진빌딩 3층 대회의실
- 주제: 전력계통 시스템의 최신 트렌드와 미래 전망
- 참가비: 무료

관심 있는 분들의 많은 참여 바랍니다. 참가 신청은 홈페이지 또는 전화로 가능합니다.

감사합니다.`,
    image: "/images/notice/notice-2.jpg",
  },
  {
    id: 3,
    title: "유진 파워 시스템 서비스 이용 안내",
    date: "2023-10-05",
    views: 321,
    content: `안녕하세요, 유진 파워 시스템입니다.

유진 파워 시스템의 서비스 이용 방법에 대해 안내드립니다.

1. 제품 구매 및 상담
   - 홈페이지: 온라인 문의 페이지를 통해 상담 신청
   - 전화: 02-123-4567 (평일 09:00~18:00)
   - 이메일: info@youjin-power.com

2. A/S 및 기술 지원
   - 전화: 02-123-4568 (평일 09:00~18:00)
   - 이메일: support@youjin-power.com
   - 방문 서비스: 전화 예약 후 방문 가능

3. 정기 점검 서비스
   - 연 2회 무상 점검 서비스 제공 (계약 고객에 한함)
   - 예약: 전화 또는 이메일로 가능

자세한 사항은 고객센터로 문의해 주시기 바랍니다. 감사합니다.`,
    image: "/images/notice/notice-3.jpg",
  },
];

export default function NoticeDetail({ params }: { params: { id: string } }) {
  const noticeId = parseInt(params.id);
  const notice = notices.find((item) => item.id === noticeId);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <Breadcrumb pageName="공지사항" description={notice.title} />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[850px]">
            <div className="mb-10">
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                {notice.title}
              </h2>
              <div className="flex flex-wrap items-center justify-between border-b border-body-color/[.15] pb-5 dark:border-white/[.15]">
                <div className="flex flex-wrap items-center">
                  <div className="mr-10 mb-5 flex items-center">
                    <span className="mr-3 text-body-color dark:text-body-color-dark">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M17.9167 4.58333H15.8333V2.91667C15.8333 2.5 15.5 2.16667 15.0833 2.16667C14.6667 2.16667 14.3333 2.5 14.3333 2.91667V4.58333H5.66667V2.91667C5.66667 2.5 5.33333 2.16667 4.91667 2.16667C4.5 2.16667 4.16667 2.5 4.16667 2.91667V4.58333H2.08333C1.25 4.58333 0.583328 5.25 0.583328 6.08333V16.0833C0.583328 16.9167 1.25 17.5833 2.08333 17.5833H17.9167C18.75 17.5833 19.4167 16.9167 19.4167 16.0833V6.08333C19.4167 5.25 18.75 4.58333 17.9167 4.58333ZM17.9167 16.0833H2.08333V8.25H17.9167V16.0833ZM6.66667 10.8333H4.16667C3.83333 10.8333 3.5 10.5 3.5 10.1667C3.5 9.83333 3.83333 9.5 4.16667 9.5H6.66667C7 9.5 7.33333 9.83333 7.33333 10.1667C7.33333 10.5 7 10.8333 6.66667 10.8333ZM15.8333 10.8333H13.3333C13 10.8333 12.6667 10.5 12.6667 10.1667C12.6667 9.83333 13 9.5 13.3333 9.5H15.8333C16.1667 9.5 16.5 9.83333 16.5 10.1667C16.5 10.5 16.1667 10.8333 15.8333 10.8333ZM11.25 10.8333H8.75C8.41667 10.8333 8.08333 10.5 8.08333 10.1667C8.08333 9.83333 8.41667 9.5 8.75 9.5H11.25C11.5833 9.5 11.9167 9.83333 11.9167 10.1667C11.9167 10.5 11.5833 10.8333 11.25 10.8333ZM6.66667 14.1667H4.16667C3.83333 14.1667 3.5 13.8333 3.5 13.5C3.5 13.1667 3.83333 12.8333 4.16667 12.8333H6.66667C7 12.8333 7.33333 13.1667 7.33333 13.5C7.33333 13.8333 7 14.1667 6.66667 14.1667ZM15.8333 14.1667H13.3333C13 14.1667 12.6667 13.8333 12.6667 13.5C12.6667 13.1667 13 12.8333 13.3333 12.8333H15.8333C16.1667 12.8333 16.5 13.1667 16.5 13.5C16.5 13.8333 16.1667 14.1667 15.8333 14.1667ZM11.25 14.1667H8.75C8.41667 14.1667 8.08333 13.8333 8.08333 13.5C8.08333 13.1667 8.41667 12.8333 8.75 12.8333H11.25C11.5833 12.8333 11.9167 13.1667 11.9167 13.5C11.9167 13.8333 11.5833 14.1667 11.25 14.1667Z" />
                      </svg>
                    </span>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      {notice.date}
                    </p>
                  </div>
                  <div className="mb-5 flex items-center">
                    <span className="mr-3 text-body-color dark:text-body-color-dark">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M10 10.8333C9.54167 10.8333 9.16667 10.4583 9.16667 10C9.16667 9.54167 9.54167 9.16667 10 9.16667C10.4583 9.16667 10.8333 9.54167 10.8333 10C10.8333 10.4583 10.4583 10.8333 10 10.8333ZM10 4.16667C9.54167 4.16667 9.16667 4.54167 9.16667 5C9.16667 5.45833 9.54167 5.83333 10 5.83333C10.4583 5.83333 10.8333 5.45833 10.8333 5C10.8333 4.54167 10.4583 4.16667 10 4.16667ZM10 14.1667C9.54167 14.1667 9.16667 14.5417 9.16667 15C9.16667 15.4583 9.54167 15.8333 10 15.8333C10.4583 15.8333 10.8333 15.4583 10.8333 15C10.8333 14.5417 10.4583 14.1667 10 14.1667Z" />
                      </svg>
                    </span>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      조회수: {notice.views}
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <Link
                    href="/notice"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    목록으로
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-10">
              {notice.image && (
                <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-md">
                  <Image
                    src={notice.image}
                    alt={notice.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="whitespace-pre-line text-base text-body-color dark:text-body-color-dark">
                {notice.content}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <div>
                <Link
                  href="/notice"
                  className="inline-flex items-center justify-center rounded-md border border-body-color/[.15] px-4 py-2 text-base font-medium text-body-color transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-white/[.15] dark:text-body-color-dark"
                >
                  <span className="mr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-current"
                    >
                      <path d="M19 9H3.83L9.42 3.41L8 2L0 10L8 18L9.41 16.59L3.83 11H19V9Z" />
                    </svg>
                  </span>
                  목록으로
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 