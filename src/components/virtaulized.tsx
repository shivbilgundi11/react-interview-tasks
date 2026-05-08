import { list } from "@/lib/utils";
import { useState } from "react";

const height = 400;
const width = 300;
const itemHeight = 35;

export default function Virtaulized() {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);

  const handleScroll = (e: any) => {
    const { scrollTop } = e.target;

    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);

    setIndices([newStartIndex, newEndIndex]);
  };

  return (
    <div className="container mx-auto mt-5 flex min-h-full w-full flex-col items-center justify-center gap-x-3 gap-y-5 border p-5">
      <h1>Virtaulized List Rendering</h1>

      <div
        className="overflow-x-hidden overflow-y-scroll border-2 border-black bg-red-500"
        style={{ width, height }}
        onScroll={handleScroll}
      >
        <div style={{ height: list.length * itemHeight, position: "relative" }}>
          {visibleList?.map((item, index) => {
            return (
              <div
                key={item}
                className={`flex h-[35px] w-[300px] items-center justify-center border-t bg-blue-400 text-center align-middle`}
                style={{
                  position: "absolute",
                  top: (indices[0] + index) * itemHeight,
                }}
              >{`Item ${item}`}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
