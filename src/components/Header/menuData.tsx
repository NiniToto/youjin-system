import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "회사소개",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "인사말",
        path: "/about/greeting",
        newTab: false,
      },
      {
        id: 12,
        title: "회사 연혁",
        path: "/about/history",
        newTab: false,
      },
      {
        id: 13,
        title: "비전",
        path: "/about/vision",
        newTab: false,
      },
      {
        id: 14,
        title: "인증서",
        path: "/about/certification",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "제품소개",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "제품 카탈로그",
        path: "/products/catalog",
        newTab: false,
      },
      {
        id: 22,
        title: "제품 사양",
        path: "/products/specs",
        newTab: false,
      },
      {
        id: 23,
        title: "제품 자료",
        path: "/products/resources",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "현장 사진",
    path: "/field",
    newTab: false,
  },
  {
    id: 4,
    title: "고객지원",
    path: "/support",
    newTab: false,
  },
  {
    id: 5,
    title: "연락처",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
