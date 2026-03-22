import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about-us",
  },
  // {
  //   id: 2,
  //   title: "Features",
  //   newTab: false,
  //   path: "/#features",
  // },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Personalized Career Guidance",
        newTab: false,
        path: "/services/personalized-career-guidance",
      },
      {
        id: 32,
        title: "IELTS, PTE, and Japanese Language Classes",
        newTab: false,
        path: "/services/language-classes",
      },
      {
        id: 33,
        title: "Scholarship and Financial Advice",
        newTab: false,
        path: "/services/scholarship-financial-advice",
      },
      {
        id: 34,
        title: "Visa Guidance and Interview Prep",
        newTab: false,
        path: "/services/visa-guidance-interview-prep",
      },
      {
        id: 35,
        title: "Pre-Departure Support",
        newTab: false,
        path: "/services/pre-departure-support",
      },
      {
        id: 36,
        title: "Student Screening & Document Preparation",
        newTab: false,
        path: "/services/student-screening-document-preparation",
      }
    ],
  },
  {
    id: 4,
    title: "Destinations",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "United States of America",
        newTab: false,
        path: "/destinations/united-states",
      },
      {
        id: 34,
        title: "Australia",
        newTab: false,
        path: "/destinations/australia",
      },
      {
        id: 35,
        title: "Canada",
        newTab: false,
        path: "/destinations/canada",
      },
      {
        id: 36,
        title: "United Kingdom",
        newTab: false,
        path: "/destinations/uk",
      },
      {
        id: 37,
        title: "New Zealand",
        newTab: false,
        path: "/destinations/new-zealand",
      },
      {
        id: 38,
        title: "Japan",
        newTab: false,
        path: "/destinations/japan",
      },
      {
        id: 39,
        title: "South Korea",
        newTab: false,
        path: "/destinations/korea",
      }
    ],
  },
  {
    id: 5,
    title: "FAQ",
    newTab: false,
    path: "/faq",
  },
  {
    id: 6,
    title: "Contact",
    newTab: false,
    path: "/support",
  }  
];

export default menuData;
