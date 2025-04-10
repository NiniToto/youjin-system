import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About/AboutSection";
import ProductsSection from "@/components/Products/ProductsSection";
import FieldGallery from "@/components/Field/FieldGallery";
import NoticeSection from "@/components/Notice/NoticeSection";
import Contact from "@/components/Contact";
import VideoSection from "@/components/Video/VideoSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "유진 파워 시스템 - 전력계통 전문기업",
  description: "유진 파워 시스템은 전력계통 관련 제품을 제공하는 전문기업입니다.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 text-center mb-8">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              유진파워시스템에 오신 것을 환영합니다
            </h2>
            <p className="mt-4 text-base text-body-color dark:text-body-color-dark">
              1995년 설립 이래로 전력 시스템 분야에서 혁신적인 솔루션을 제공하며 성장해 왔습니다.
            </p>
            <div className="mt-6">
              <Link 
                href="/about/greeting" 
                className="px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </div>
      <VideoSection />
      <AboutSection />
      <ProductsSection />
      <FieldGallery />
      <NoticeSection />
      <Contact />
    </>
  );
}
