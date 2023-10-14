import Image from "next/image";
import MainLayout from "@/components/layout/mainLayout";
import SearchBar from "@/components/searchBar";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import { Button } from "@mui/material";
import {useSearchParams} from "next/navigation";
import Rectangle30 from "../../public/hng.png";
import { useState, useEffect } from "react";

export default function Index() {
    const [data, setData] = useState<any>({})
    const searchParams = useSearchParams();
    const keyword = searchParams.get("keyword");
    
    useEffect(() => 
    {
        fetchData()
    }, 
[])
    const fetchData = () => fetch(`https://wetindeysup-api.onrender.com/api/events/search?keyword=${keyword}`
       
    )
    .then(res => res.json())
    .then(res => {
      console.log(res.data[0])
      setData(res.data[0])
    })
    .catch(error => console.log(error))
   console.log(typeof(data.event_name))
  const ArrowDownSVG: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 10L12 15L7 10"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const NextBtnSVG: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
    >
      <rect y={0.5} width={32} height={32} rx={8.16761} fill="#3F3849" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.975 11.2614C16.1816 11.0524 16.4617 10.9351 16.7537 10.9351C17.0458 10.9351 17.3259 11.0524 17.5325 11.2614L21.9384 15.7191C22.1448 15.9281 22.2608 16.2115 22.2608 16.507C22.2608 16.8025 22.1448 17.0859 21.9384 17.2949L17.5325 21.7527C17.3247 21.9557 17.0465 22.068 16.7577 22.0655C16.4689 22.0629 16.1926 21.9457 15.9884 21.7391C15.7842 21.5325 15.6684 21.2529 15.6658 20.9607C15.6633 20.6685 15.7744 20.387 15.975 20.1768L18.5007 17.6214H10.1449C9.8528 17.6214 9.57264 17.504 9.36607 17.295C9.1595 17.086 9.04346 16.8026 9.04346 16.507C9.04346 16.2114 9.1595 15.928 9.36607 15.719C9.57264 15.51 9.8528 15.3926 10.1449 15.3926H18.5007L15.975 12.8372C15.7685 12.6282 15.6525 12.3448 15.6525 12.0493C15.6525 11.7537 15.7685 11.4703 15.975 11.2614Z"
        fill="#FFC6BC"
      />
    </svg>
  );

  const GroupRectangleSVG: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={85}
      height={129}
      viewBox="0 0 85 129"
      fill="none"
    >
      <rect
        x={35.5125}
        y={24.5854}
        width={73.7565}
        height={103.806}
        fill="url(#paint0_linear_6_5074)"
      />
      <rect
        width={73.7565}
        height={103.806}
        fill="url(#paint1_linear_6_5074)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_5074"
          x1={72.3907}
          y1={32.0977}
          x2={72.3907}
          y2={188.865}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_5074"
          x1={36.8783}
          y1={30.049}
          x2={36.8783}
          y2={161.097}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
//   const lower:string = data.event_name
//   console.log(lower)
//   const low:string = lower.toLowerCase()
//   console.log(low)
  const Render = () => {
    if(data && data.event_name) {
        interface TimelinePitchItem {
    
            bg: string;
            imgSrc: any;
            name: string;
            date: string;
            time: string;
            stadium: string;
          }
          const pitchArray: TimelinePitchItem[] = [
            {
              
              bg: "bg-[#FFE0C4]",
              imgSrc: Rectangle30,
              name: `${data.event_name}`,
              date: `${data.event_start}`,
              time: `${data.event_end}`,
              stadium: `${data.location}`,
            },
          ];
          const pitchData = pitchArray.map((item, index) => (
            <div key={index} className={`py-6 px-4 rounded-2xl ${item.bg}`}>
              <Image src={item.imgSrc} className="w-full" alt="" />
              <div className="relative mt-4 flex justify-between gap-3">
                <span className="text-black font-sans font-medium text-base">
                  <h2 className="font-sans text-xl font-bold text-[#3F3849]">
                    {item.name}
                  </h2>
                  <h6 className="mt-3">{item.date}</h6>
                  <p className="mt-3 opacity-70">{item.time}</p>
                  <p className="mt-3 font-normal">{item.stadium}</p>
                </span>
                <button className="z-10 active:scale-[0.95]">
                  <NextBtnSVG />
                </button>
                <div className="absolute top-[-25px] right-[-16px]">
                  <GroupRectangleSVG />
                </div>
              </div>
            </div>
          ));
        return (
            <div className="mt-[19px] grid lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 "> 
                {pitchData} 
            </div>
        )
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
                We couldn&apos;t find any results for your search. Please check
                </p>
                <p className="items-center text-gray-500">your entry and try again.</p>
                <Button
                className="pt-4 pb-4 pl-4 pr-4 bg-pink-400  mt-8  rounded-2xl"
                href="https://zuri-events-app.vercel.app/timeline"
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
        )
      }
  
  };
  return (
    <MainLayout>
      <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 p-4 lg:py-10">
        {/* Title section */}
        <div className="flex justify-normal">
          <div className=" md:block">
            <h2 className="text-xl xl:text-2xl font-bold mb-4">
              Search Results
            </h2>
            <p className="text-sm xl:text-base font-medium">
              <span className=" text-brand-gray-400">showing results for</span>{" "}
              <span className="text-brand-black-400 font-bold">
                {keyword}
              </span>
            </p>
          </div>
        </div>
        <SearchBar  />
      </header>
      <Render />  
    </MainLayout>
  );
}
