import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/Root";
import { Home } from "@/app/components/Home";
import { Works } from "@/app/components/Works";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Photography } from "@/app/components/Photography";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "works", Component: Works },
      { path: "photography", Component: Photography },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);