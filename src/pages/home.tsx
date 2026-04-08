import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Navbar from "@/components/navbar";
import { Link } from "react-router-dom";

export default function Home() {
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

        <Link
          to="/tasks"
          className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/80"
        >
          Tasks
        </Link>
      </div>
    </>
  );
}
