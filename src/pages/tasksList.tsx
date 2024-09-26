import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TasksList() {
  return (
    <>
      <div className="items- container flex min-h-[30vh] w-full flex-col items-center justify-center gap-y-5">
        <h1 className="flex h-full items-center justify-center gap-x-2 self-start text-start text-3xl font-bold">
          <FaTasks /> Tasks List's
        </h1>

        <Link to={"url-params-routes"}>URL Params Routes</Link>
      </div>
    </>
  );
}
