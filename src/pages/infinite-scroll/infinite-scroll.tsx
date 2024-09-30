import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";

import Navbar from "@/components/navbar";

interface ImgObj {
  id: string;
  url: string;
  download_url: string;
  author: string;
}

export default function InfiniteScroll() {
  const [data, setData] = useState<ImgObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=6`,
        );

        const dt = await res.json();
        setData((prev: ImgObj[]) => [...prev, ...dt]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    const screenHeight = window.scrollY;
    const contentHeight = document.body.offsetHeight;
    const innerHeight = window.innerHeight;

    if (screenHeight + innerHeight >= contentHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container min-h-full w-full">
        <h1 className="py-6 text-center text-3xl font-bold underline">
          Implement Infinite Scroll - API Fetching Challenge{" "}
        </h1>

        <div className="mb-5 mt-24 flex h-auto w-full flex-col items-center justify-center gap-5">
          {data &&
            data.map(
              (
                {
                  author,
                  download_url,
                }: {
                  author: string;
                  download_url: string;
                },
                i,
              ) => {
                return (
                  <div className="h-auto max-w-[400px]" key={i}>
                    <h2 className="text-xl font-semibold">{author}</h2>
                    <img
                      src={download_url}
                      alt={author}
                      className="block min-h-[350px] w-full rounded-xl object-cover object-center"
                    />
                  </div>
                );
              },
            )}

          {isLoading && (
            <div className="flex min-h-[30vh] w-full items-center justify-center">
              <ImSpinner2 className="animate-spin text-6xl font-bold" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
