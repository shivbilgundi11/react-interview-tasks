import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: ".bin",
        },
        {
          name: "babel",
        },
      ],
    },
    {
      name: "public",
      children: [
        {
          name: "vite.svg",
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "app.tsx",
        },
        {
          name: "app.css",
        },
        {
          name: "main.tsx",
        },
        {
          name: "app.css",
        },
      ],
    },
    {
      name: ".gitignore",
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts",
    },
  ],
};

type TreeEntry = {
  name: string;
  children?: TreeEntry[];
};

function Entry({ depth, entry }: { entry: TreeEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div>
      <button
        className={`inline-flex items-center gap-x-1 rounded-lg p-1 px-2 hover:bg-gray-300 dark:hover:bg-muted ${entry.children ? "ml-2" : "ml-6"}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {entry.children && (
          <IoIosArrowForward
            className={`text-muted-foreground transition-all duration-200 ease-in-out ${isExpanded ? "rotate-90" : "rotate-0"}`}
          />
        )}{" "}
        {entry.name}
      </button>
      {isExpanded && (
        <div style={{ paddingLeft: depth * 10 }}>
          {entry.children?.map((entry, depth) => (
            <Entry entry={entry} depth={depth} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree() {
  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-6 text-center text-3xl font-bold underline">
          Build a dummy file tree type component in React.
        </h1>

        <div className="flex h-[50vh] w-full items-center justify-center py-6 lg:py-10">
          <div>
            {files?.children.map((entry) => <Entry entry={entry} depth={1} />)}
          </div>
        </div>
      </div>
    </>
  );
}
