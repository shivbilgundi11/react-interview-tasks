import { useEffect, useState } from "react";

import { movieList } from "@/lib/utils";

export default function DebouncedFilter() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(movieList);

  useEffect(() => {
    const handler = setTimeout(() => {
      setMovies(
        movieList.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    }, 600);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-10 text-center text-3xl font-bold underline">
          Debounced Search Input - Filter Movie Names
        </h1>

        <div className="my-9 flex h-auto w-full items-center justify-center">
          <input
            type="text"
            className={`w-full max-w-screen-md rounded-xl border-4 text-xl font-semibold outline-none focus:border-black dark:bg-inherit md:px-4 lg:h-20`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="flex h-auto w-full flex-col items-center justify-center gap-y-2 text-2xl font-semibold">
          {movies &&
            movies.map(({ name, id }) => {
              return <p key={id}>{name}</p>;
            })}
        </div>
      </div>
    </>
  );
}
