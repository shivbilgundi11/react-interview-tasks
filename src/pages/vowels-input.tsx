import { useEffect, useState } from "react";

export default function VowelsInput() {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const string = inputValue.toLowerCase().split("");

    const newStr = string
      .map((char) => {
        if (
          char === "a" ||
          char === "e" ||
          char === "i" ||
          char === "o" ||
          char === "u"
        ) {
          return (char = "#");
        } else {
          return char;
        }
      })
      .join("");

    setInputValue(newStr);
  }, [inputValue]);

  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-10 text-center text-3xl font-bold underline">
          Replace Vowels with # in Input Field
        </h1>

        <div className="flex min-h-[40vh] w-full items-center justify-center">
          <input
            type="text"
            className={`w-full max-w-screen-md rounded-xl border-4 text-xl font-semibold outline-none focus:border-black dark:bg-inherit dark:focus:border-white md:px-4 lg:h-20`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <h1 className="text-center text-3xl font-semibold">{inputValue}</h1>
      </div>
    </>
  );
}
