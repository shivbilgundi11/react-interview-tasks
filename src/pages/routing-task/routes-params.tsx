import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { movies, shows } from "@/lib/utils";

import ListRender from "./list-render";

export default function RouteURLParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const showMovies = searchParams.get("category") === "movies";

  const handleClick = (cat: string) => {
    setSearchParams({ category: cat });
  };

  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-6 text-center text-3xl font-bold underline">
          RouteURLParams
        </h1>

        <div className="flex items-center gap-x-1">
          <Button onClick={() => handleClick("movies")}>Movie's</Button>
          <Button onClick={() => handleClick("shows")}>Show's</Button>
        </div>

        <div className="mb-8 flex h-auto w-full flex-col items-center justify-center py-8">
          {showMovies ? (
            <ListRender list={movies} />
          ) : (
            <ListRender list={shows} />
          )}
        </div>
      </div>
    </>
  );
}
