import { useRef, useState } from "react";
import { GoGrabber } from "react-icons/go";

import { todos } from "@/lib/utils";

interface TodoData {
  [key: string]: string[];
}

export default function DragAndDrop() {
  const [todoData, setTodoData] = useState<TodoData>(todos);

  const dragItem = useRef<string | null>(null);
  const dragContainer = useRef<string | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLParagraphElement>,
    todo: string,
    container: string,
  ) => {
    dragItem.current = todo;
    dragContainer.current = container;

    e.currentTarget.style.opacity = "0.3";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.currentTarget.style.opacity = "1";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (targetContainer: string) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;

    if (item && sourceContainer) {
      setTodoData((prev) => {
        const newData = { ...prev };

        newData[sourceContainer] = newData[sourceContainer].filter(
          (todo) => todo !== item,
        );

        newData[targetContainer] = [...newData[targetContainer], item];

        return newData;
      });
    }
  };

  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-10 text-center text-3xl font-bold underline">
          Drag-and-Drop To-Do App in React.
        </h1>

        <div className="my-9 grid h-auto w-full grid-cols-1 gap-4 gap-y-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
          {todoData &&
            Object.keys(todoData).map((category, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-col gap-y-3 md:gap-y-4"
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={() => handleDrop(category)}
                >
                  <h1 className="rounded-lg border-2 bg-muted p-2 text-center text-xl font-semibold md:text-2xl lg:text-3xl">
                    {category}
                  </h1>

                  {todoData[category] &&
                    todoData[category].map((item: string, index: number) => {
                      return (
                        <p
                          key={index}
                          draggable
                          onDragStart={(e) =>
                            handleDragStart(e, item, category)
                          }
                          onDragEnd={(e) => handleDragEnd(e)}
                          className="group flex cursor-grab items-center gap-x-2 rounded-md p-2 px-3 font-medium transition-all duration-200 ease-in-out hover:bg-muted"
                        >
                          <GoGrabber
                            size={"30"}
                            fontWeight={"900"}
                            className="text-2xl font-bold text-gray-700 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 dark:text-white"
                          />
                          {item}
                        </p>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
