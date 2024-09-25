import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { ToggleTheme } from "./ui/toggle-theme";

export default function Navbar() {
  return (
    <>
      <header className="flex h-12 w-full items-center justify-center">
        <nav className="container flex h-full w-full items-center justify-between border-b py-4">
          <h1 className="text-xl font-semibold italic">
            <span className="text-purple-500">i</span>Tasks
          </h1>

          <div className="flex items-center gap-x-2">
            <ToggleTheme />
            <Link
              to="https://github.com/shivbilgundi11/react-interview-tasks"
              target="_blank"
            >
              <Button className="flex items-center gap-x-2 tracking-wide">
                <FaGithub /> Star on GitHub
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
