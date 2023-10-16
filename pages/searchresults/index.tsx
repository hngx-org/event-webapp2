import Image from "next/image";
import MainLayout from "@/components/layout/mainLayout";
import SearchBar from "@/components/searchBar";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {
  GroupRectangleSVG,
  NextBtnSVG,
} from "@/components/layout/TimelineEvents";

export default function Index() {
  const [data, setData] = useState<any>({});
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://wetindeysup-api.onrender.com/api/events/search?keyword=${keyword}`,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((error) => console.log(error));
  };

  const Render = () => {
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      return date.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    if (data && data.event_name) {
      const pitchData = (
        <div className="mt-[19px] grid lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
          <div key={0} className={`py-6 px-4 rounded-2xl bg-[#FFE0C4]`}>
            <Image
              src={data.image}
              className="w-full"
              alt=""
              width={100}
              height={100}
            />
            <div className="relative mt-4 flex justify-between gap-3">
              <span className="text-black font-sans font-medium text-base">
                <h2 className="font-sans text-xl font-bold text-[#3F3849]">
                  {data.event_name}
                </h2>
                <h6 className="mt-3">{formatDate(data.event_start)}</h6>
                <p className="mt-3 opacity-70">{formatDate(data.event_end)}</p>
                <p className="font-normal">{data.location}</p>
              </span>
              <button className="z-10 active:scale-[0.95]">
                <NextBtnSVG />
              </button>
              <div className="absolute top-[-25px] right-[-16px]">
                <GroupRectangleSVG />
              </div>
            </div>
          </div>
        </div>
      );
      return pitchData;
    } else {
      return (
        <div className="flex flex-col items-center gap-3">
          <Image
            alt="noresult"
            src="/assets/images/noresult.png"
            width={240}
            height={240}
            className="text-center"
          />
          <h1 className="text-black-900 font-bold font-16 text-2xl">
            Oops, something is missing
          </h1>
          <p className="items-center text-gray-500">
            We couldn't find any results for your search. Please check
          </p>
          <p className="items-center text-gray-500">
            your entry and try again.
          </p>
          <Button
            className="pt-4 pb-4 pl-4 pr-4 bg-pink-400 mt-8 rounded-2xl"
            href="/timeline"
          >
            <Image
              alt="vector"
              src="/assets/images/Vector.png"
              width={20}
              height={20}
              className="mr-3"
            />
            <span id="btn">Go back to the timeline</span>
          </Button>
        </div>
      );
    }
  };

  return (
    <MainLayout>
      <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 p-4 lg:py-10">
        <div className="flex justify-normal">
          <div className="md:block">
            <h2 className="text-xl xl:text-2xl font-bold mb-4">
              Search Results
            </h2>
            <p className="text-sm xl:text-base font-medium">
              <span className="text-brand-gray-400">showing results for</span>{" "}
              <span className="text-brand-black-400 font-bold">{keyword}</span>
            </p>
          </div>
        </div>
        <SearchBar />
      </header>
      <Render />
    </MainLayout>
  );
}
