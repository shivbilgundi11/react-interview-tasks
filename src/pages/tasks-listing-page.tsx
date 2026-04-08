import Navbar from "@/components/navbar";
import TasksList from "./tasksList";
import { HomeBreadcrumb } from "@/components/home-breadcrumb";

export default function TasksListingPage() {
  return (
    <>
      <Navbar />
      <HomeBreadcrumb />
      <TasksList />
    </>
  );
}
