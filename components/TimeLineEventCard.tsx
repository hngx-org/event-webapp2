import { TimelineCardProps } from "@/@types/index";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rectangle31 from '../public/Rectangle31.png'
import Rectangle32 from '../public/Rectangle32.png'
import { GroupRectangleSVG, NextBtnSVG } from "./layout/TimelineEvents";

const TimeLineEventCard = ({
  creator,
  description,
  end_date,
  end_time,
  group,
  id,
  image,
  location,
  start_date,
  start_time,
  title
}: TimelineCardProps) => {
  const [renderBg, setRenderBg] = useState<string>('')
  const [renderBgImg, setRenderBgImg] = useState<any>()
  const convertDate = (inputDate: string) => {
    const date = new Date(inputDate)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  const getDay = (date: string) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    const num = new Date(date).getDay()
    return days[num]
  }

  const dynamicBg = () => {
    const colors = ["bg-[#EEE0FF]", "bg-[#FFC6BC]", "bg-[#FFE0C4]", "bg-[#D2F5FE]"];
    const randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
  }
  const dynamicImg = () => {
    const imgs = [Rectangle31, Rectangle32];
    const randomNum = Math.floor(Math.random() * imgs.length);
    return imgs[randomNum];
  }

  useEffect(() => {
    setRenderBg(dynamicBg())
    setRenderBgImg(dynamicImg())
  }, [])

  return (
    <div className={`py-6 px-4 rounded-2xl ${renderBg}`}>
      <Image src={image || renderBgImg} width={100} height={100} className="w-full aspect-video rounded-2xl object-cover" alt="" />
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-sans text-xl font-bold text-[#3F3849]">{title}</h2>
          <h6 className="mt-3">{convertDate(end_date)}</h6>
          <p className="mt-3 opacity-70">{getDay(end_date)}, {start_time} - {end_time}</p>
          <p className="mt-3 font-normal capitalize">{location || 'Unlnown Location'}</p>

        </span>
        <button className="z-10 active:scale-[0.95]">
          <NextBtnSVG />
        </button>
        <div className="absolute top-[-25px] right-[-16px]">
          <GroupRectangleSVG />
        </div>
      </div>
    </div>
  );
};

export default TimeLineEventCard;
