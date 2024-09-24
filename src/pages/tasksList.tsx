import { Link } from "react-router-dom";

export default function TasksList() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl font-bold underline">
          Here the tasks will listed
        </h1>

        <Link to={"/"} className="text-base text-blue-700 underline">
          Go to home page?
        </Link>
      </div>
    </>
  );
}
