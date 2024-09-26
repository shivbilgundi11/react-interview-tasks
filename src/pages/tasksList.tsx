import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { tasksList } from "@/lib/utils";

export default function TasksList() {
  return (
    <>
      <div className="items- container flex min-h-[30vh] w-full flex-col items-center justify-center gap-y-5">
        <h1 className="flex h-full items-center justify-center gap-x-2 self-start text-start text-3xl font-bold">
          <FaTasks /> Tasks List's
        </h1>

        <div className="container h-auto w-full">
          {tasksList &&
            tasksList.map(({ id, name, description, path }) => {
              return (
                <Accordion type="single" collapsible key={id}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      {id}. {name}
                    </AccordionTrigger>
                    <AccordionContent>{description}</AccordionContent>
                    <AccordionContent>
                      <Link to={path}>
                        <Button variant={"link"} className="px-0">
                          Learn more
                        </Button>
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
        </div>
      </div>
    </>
  );
}
