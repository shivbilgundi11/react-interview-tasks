import { useEffect, useState } from "react";

export default function TrafficSignal({ ligths = ["green", "yellow", "red"] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((pervActive) => {
        return (pervActive + 1) % ligths.length;
      });
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [ligths.length]);

  return (
    <>
      <div className="container min-h-full w-full">
        <h1 className="py-10 text-center text-3xl font-bold underline">
          Traffic Light Simulator with Automatic Signal Transition
        </h1>

        <div className="my-9 flex h-auto w-full flex-col items-center justify-center gap-y-2">
          {ligths.map((color, index) => {
            return (
              <div
                className="h-12 w-12 rounded-full border-2 border-gray-400"
                key={index}
                style={{
                  backgroundColor: `${active === index ? color : "grey"}`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
