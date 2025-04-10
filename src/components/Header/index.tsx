"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // 언어 선택
  const [language, setLanguage] = useState("ko");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLangMenuOpen(false);
    
    // 언어 변경 시 로컬 스토리지에 저장
    localStorage.setItem("selectedLanguage", lang);
    
    // 실제 언어 적용 (예시: HTML lang 속성 변경)
    document.documentElement.lang = lang;
    
    // 페이지 콘텐츠에 언어 변경을 알림
    const languageChangeEvent = new Event("languageChange");
    window.dispatchEvent(languageChangeEvent);
  };
  
  // 페이지 로드 시 저장된 언어 설정 복원
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);
  
  // 언어 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languageMap = {
    ko: { text: "KR", title: "한국어" },
    en: { text: "EN", title: "English" },
    ja: { text: "JP", title: "日本語" },
    zh: { text: "CN", title: "中文" }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/youjin-power-logo.svg"
                  alt="유진파워시스템 로고"
                  width={140}
                  height={30}
                  className="w-full dark:invert"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <Link
                              href={menuItem.submenu[0].path}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                            </Link>
                            <div
                              className="submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 block"
                            >
                              {menuItem.submenu.map((submenuItem, idx) => (
                                <Link
                                  href={submenuItem.path}
                                  key={idx}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4 xl:gap-7">
                <ThemeToggler />

                <div className="relative" ref={langMenuRef}>
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                    title="언어 선택"
                  >
                    <span>{languageMap[language].text}</span>
                  </button>
                  
                  {langMenuOpen && (
                    <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {Object.entries(languageMap).map(([key, value]) => (
                          <button
                            key={key}
                            onClick={() => changeLanguage(key)}
                            className={`w-full text-left px-4 py-2 text-sm ${
                              language === key 
                                ? 'bg-primary text-white'
                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            role="menuitem"
                          >
                            {value.text} - {value.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <Link
                  href="/signin"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                  title="관리자 로그인"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </Link>

                {/* Mobile Navbar Toggle */}
                <button
                  onClick={navbarToggleHandler}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
