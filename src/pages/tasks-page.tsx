import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import { HomeBreadcrumb } from "@/components/home-breadcrumb";

export default function TasksPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5 w-full px-4">
        <HomeBreadcrumb />
      </div>
      <Outlet />
    </>
  );
}
