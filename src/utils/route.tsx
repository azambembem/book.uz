import Dashboard from "@/components/profile/customs/sections/dashboard";
import MeningBuyurtmalarim from "@/components/profile/customs/sections/mening-buyurtmalarim";
import Sozlamalar from "@/components/profile/customs/sections/sozlamalar";
import Authors, { SelectedAuthor } from "@/pages/authors";
import Books, { SelectedBook } from "@/pages/books";
import Home from "@/pages/home";
import News, { SelectedNews } from "@/pages/news";
import Orders from "@/pages/orders";
// import MeningBuyurtmalarim from "@/pages/mening-buyurtmalarim";
import Profile from "@/pages/profile";
import Word from "@/pages/word";
import type { IRoute } from "@/types";

export const route: IRoute[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
    id: 1
  },
  {
    title: "Profile",
    path: "/profile",
    element: <Profile />,
    id: 2,
    isPrivate: true,
    hasChild: true,
    children: [
      {
        title: "Dashboard",
        path: "",
        element: <Dashboard />,
        id: 2.1,
        isPrivate: true
      },
      {
        title: "Mening Buyurtmalarim",
        path: "my-products",
        element: <MeningBuyurtmalarim />,
        id: 2.2,
        isPrivate: true
      },
      {
        title: "Sozlamalar",
        path: "settings",
        element: <Sozlamalar />,
        id: 2.3,
        isPrivate: true
      }
    ]
  },
  {
    title: "Books",
    path: "/books",
    element: <Books />,
    id: 3,
    hasChild: true,
    children: [
      {
        title: "Selected Book",
        path: ":id",
        element: <SelectedBook />,
        id: 3.1
      }
    ]
  },
  {
    title: "MeningBuyurtmalarim",
    path: "/mening-buyurtmalarim",
    element: <MeningBuyurtmalarim />,
    id: 4
  },
  {
    title: "Word",
    path: "/word",
    element: <Word />,
    id: 5
  },
  {
    title: "Authors",
    path: "/authors",
    element: <Authors />,
    id: 6,
    hasChild: true,
    children: [
      {
        title: "Selected Author",
        path: ":id",
        element: <SelectedAuthor />,
        id: 6.1
      }
    ]
  },
  {
    title: "News",
    path: "/news",
    element: <News />,
    id: 7,
    hasChild: true,
    children: [
      {
        title: "Selected News",
        path: ":id",
        element: <SelectedNews />,
        id: 7.1
      }
    ]
  },
  {
    title: "Orders",
    path: "/orders",
    element: <Orders />,
    id: 8
  }
];
