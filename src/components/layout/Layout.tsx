import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./index";
import { Sidebar } from "@/components/layout/Sidebar";

export const Layout: FC = () => {
  return (
    <main>
      <Sidebar />

      <div id="main">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </main>
  );
};
