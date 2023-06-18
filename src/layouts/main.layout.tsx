import { Outlet } from "react-router-dom";
import AppBar from "../components/Appbar";

const MainLayout = () => {
  return (
    <div className="dark:bg-[#0A0A0A] bg-neutral-100 pt-16">
      <AppBar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
