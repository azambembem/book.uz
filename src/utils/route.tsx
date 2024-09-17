import Home from "@/pages/home";
import Profile from "@/pages/profile";
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
  }
];
