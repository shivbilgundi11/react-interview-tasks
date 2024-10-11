import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import TasksList from "./pages/tasksList";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container flex min-h-[50vh] w-full flex-col items-center justify-center gap-y-5 border-b">
        <h1 className="text-3xl font-bold underline md:text-5xl">
          React.JS Interview Challenge's...!
        </h1>

        <p className="mx-auto text-center text-lg font-medium text-muted-foreground md:text-xl lg:max-w-[30vw]">
          Below is a list of React code challenges that are commonly asked in
          interviews and could potentially come up.
        </p>

        <p className="inline-flex items-center gap-x-2 font-mono font-medium underline">
          Source code for all challenges can be found on{" "}
          <a
            href="https://github.com/shivbilgundi11/react-interview-tasks"
            target="_blank"
            title="GitHub"
          >
            <GitHubLogoIcon />
          </a>
        </p>
      </div>
      <Outlet />
      <TasksList />
    </>
  );
}
