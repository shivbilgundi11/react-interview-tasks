import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import { HomeBreadcrumb } from "./components/home-breadcrumb";

export default function App() {
  return (
    <>
      <Navbar />
      <HomeBreadcrumb />
      <Outlet />
    </>
  );
}
