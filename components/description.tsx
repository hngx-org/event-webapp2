import React from "react";
import { EventProps } from "@/@types";
import Image from "next/image";
const Description = ({ event }: { event: EventProps }) => {
  return (
    <>
      {/* mobile */}
      <div className="evet__description bg-primary min-w-[100vw] flex-col  relative right-10 justify-center p-4 items-center relative flex lg:hidden">
        <div className=" flex  gap-6 mb-2 text-brand-pink-400 ">
          <Image src="/assets/comments/back-arrow-icon.svg" alt={""} />
          <h1>11 comments</h1>
        </div>

        <div className="bg-brand-pink-400 max-w-[400px] p-2 rounded-lg ">
          <div className="flex">
            <Image src={event.photoMobile} alt={""} />
            <div className=" font-bold">
              <h1 className="  text-2xl">{event.title}</h1>
              <h2 className=" ">{event.date}</h2>
              <p className=" text-xs ">
                {event.day} {event.time}
              </p>
              <p>{event.location}</p>
            </div>
          </div>

          <div className=" bg-primary mx-auto text-white p-2">
            <input type="checkbox" id="invite" className=" bg-primary" />
            <label htmlFor="invite" className="mx-3">
              Check Box to Invite to Techies
            </label>
          </div>
          <button className=" mx-auto flex m-2">Share</button>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden lg:flex rounded-xl bg-brand-purple-300 flex-col  max-w-[378px] p-3 max-h-[400px]">
        <Image src="/assets/comments/event-photo-desk.svg" alt={""} />
        <h1 className=" text-2xl">{event.title}</h1>
        <h2 className=" ">{event.date}</h2>
        <p className=" text-xs font-[100] ">
          {event.day} {event.time}
        </p>
        <p>{event.location}</p>
        <div className="">
          <a href="#" className="cursor-pointer underline font-bold">
            I will join
          </a>
          <a href="#" className="underline ml-3 font-bold cursor-pointer ">
            Share
          </a>
        </div>
      </div>
    </>
  );
};

export default Description;
