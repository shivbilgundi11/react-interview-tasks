import React, { useState } from "react";

import Navbar from "@/components/navbar";

export default function HexCodeInput() {
  const [isHexString, setIsHexString] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHexString(false);

    const value = e.target.value;

    let isString = 0;

    for (let i = 0; i < value.length; i++) {
      if (isNaN(parseInt(value[i]))) {
        isString = isString + 1;
      }
    }

    if (isString === 6) {
      return setIsHexString(true);
    }

    setInputValue(value);
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-full w-full">
        <h1 className="py-10 text-center text-3xl font-bold underline">
          React Input Border Color Based on Hex Code Input
        </h1>

        <div className="flex min-h-[40vh] w-full items-center justify-center">
          <input
            type="text"
            className={`w-full max-w-screen-md rounded-xl border-4 text-xl font-semibold outline-none dark:bg-inherit md:px-4 lg:h-20`}
            style={{ borderColor: isHexString ? "inherit" : "#" + inputValue }}
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
