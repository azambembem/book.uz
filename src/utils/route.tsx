import Books from "@/pages/books";
import Home from "@/pages/home";
import MeningBuyurtmalarim from "@/pages/mening-buyurtmalarim";
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
    isPrivate: true
  },
  {
    title: "Books",
    path: "/books",
    element: <Books />,
    id: 3
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
  }
];
