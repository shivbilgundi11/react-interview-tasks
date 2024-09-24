import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl font-bold underline">Hello world...!</h1>

        <Link to={"/tasks-list"} className="text-base text-blue-700 underline">
          Go to Tasks List Page
        </Link>
      </div>
    </>
  );
}
