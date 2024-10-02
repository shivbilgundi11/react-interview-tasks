import { useEffect, useState } from "react";

export default function DebouncedSearch() {
  const [inputValue, setInputValue] = useState<string>();
  const [searchedValue, setSearchedValue] = useState<string>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-10 text-center text-3xl font-bold underline">
          Debounced Search Input - Optimization Challenge.
        </h1>

        <div className="flex min-h-[40vh] w-full items-center justify-center">
          <input
            type="text"
            className={`w-full max-w-screen-md rounded-xl border-4 text-xl font-semibold outline-none dark:bg-inherit md:px-4 lg:h-20`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <h1 className="text-center text-3xl font-semibold">{searchedValue}</h1>
      </div>
    </>
  );
}
