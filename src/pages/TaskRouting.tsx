import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dropDownLinks } from "@/lib/utils";

export default function TaskRouting() {
  return (
    <>
      <div className="container min-h-screen w-full py-7 lg:py-10">
        <h1 className="mb-6 text-3xl font-bold underline lg:mb-8">
          1. Building a Dynamic Dropdown with URL Update Using React Router
        </h1>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="min-w-[100px] rounded-md bg-black p-2 text-white dark:bg-white dark:text-black">
              Open
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Some Link's</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropDownLinks &&
                dropDownLinks.map(({ id, linkName, path }) => {
                  return (
                    <Link to={path}>
                      <DropdownMenuItem key={id}>{linkName}</DropdownMenuItem>
                    </Link>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
