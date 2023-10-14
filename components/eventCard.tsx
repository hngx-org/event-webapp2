import { ArrowButtonIcon } from "@/public/assets/icon/arrowButtonIcon";
import { RightArrowIcon } from "@/public/assets/icon/rightArrowIcon";
import Image from "next/image";
import rectangles from "assets/images/rectangles.png";
import FootballImage from "assets/images/football.png";
import PitchImage from "assets/techiesgroup/pitch.png";
import PeopleImage from "assets/techiesgroup/people.png";
import { CommentIcon } from "@/public/assets/icon/commentIcon";
import { EventCardProps } from "@/@types";

export default function EventCard({
  bgColor,
  textColor,
  btnColor,
  comments,
  img,
}: EventCardProps) {
  const colors = [
    "bg-brand-purple-300",
    "bg-brand-blue-300",
    "bg-brand-pink-500",
    "bg-brand-pink-400",
  ];
  // md:min-w-[320px] min-[980px]:min-w-0 min-[1230px]:max-w-[300px]
  return (
    <div className="w-full max-w-[380px] md:max-w-[320px] min-[1230px]:max-w-[300px] mx-auto md:mx-0 font-sans overflow-hidden min-[1024px]:max-w-[293px] min-[1112px]:max-w-[320px]">
      <div
        className={`${bgColor} ${textColor} pr-4 py-4  md:pl-4 md:pt-6 md:pb-3 rounded-t-2xl text-base border border-b-0 border-black md:border-none`}
      >
        <div className="flex items-center md:items-start md:flex-col md:space-y-3">
          <div className="w-[90px] h-[90px] md:w-full md:h-[140px] relative z-10">
            <Image
              src={FootballImage}
              alt="Football"
              width={270}
              height={160}
              className="md:hidden object-cover w-full h-full rounded-full md:rounded-2xl"
            />
            <Image
              src={img || PitchImage}
              alt="Football Pitch"
              width={270}
              height={160}
              className="hidden md:block object-cover w-full h-full rounded-full md:rounded-2xl"
            />
          </div>
          <div className="relative flex justify-between max-md:flex-1 w-full">
            <div className="md:space-y-1">
              <div className="font-bold font-sans md:font-monserrat text-lg md:text-xl tracking-[0.2px] md:text-primary">
                Football Game
              </div>
              <div className="font-medium md:hidden">May 20, 2023</div>
              <div className="font-medium hidden md:block">20th May, 2023</div>
              <div className="font-bold text-xs md:text-base md:font-medium opacity-70 md:hidden">
                Friday, 4 - 6 PM
              </div>
              <div className="font-medium md:opacity-70 hidden md:block">
                Friday, 16:00-18:00
              </div>
              <div className="font-medium md:font-normal md:opacity-80 text-[15px] md:text-base">
                Teslim Balogun Stadium
              </div>
            </div>
            <div className="flex items-end md:items-center">
              <button className="relative z-10 hover:scale-90 transition-all duration-200">
                <ArrowButtonIcon />
              </button>
            </div>
            <div className="absolute bottom-2 -right-3 md:bottom- md:-right-6 md:-top-16">
              <Image
                src={rectangles}
                alt="rectangles"
                width={100}
                height={100}
                className="max-md:w-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${bgColor} max-md:text-center ${
          btnColor || "max-md:bg-white"
        } px-4 py-2 md:pb-6 border border-black md:border-none md:pt-0`}
      >
        <a
          href="#"
          className="underline text-primary font-bold text-lg font-monserrat"
        >
          I will join
        </a>
      </div>
      <a
        href="#"
        className="rounded-b-2xl bg-primary py-3 px-6 text-white text-base md:text-sm flex items-center justify-between hover:bg-primary/80 transition-colors ease-in-out duration-150  border border-black md:border-none border-t-0 md:pl-4"
      >
        {!comments ? (
          <div className="md:hidden flex items-center gap-3">
            <CommentIcon />
            <span>Leave a comment</span>
          </div>
        ) : (
          <div className="md:hidden flex items-center gap-3">
            <div className="flex">
              <Image
                width={66}
                height={24}
                src={PeopleImage}
                alt="avatars"
                className="rounded-full"
              />
            </div>
            <span>11 Comments</span>
          </div>
        )}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex">
            <Image
              width={66}
              height={24}
              src={PeopleImage}
              alt="avatars"
              className="rounded-full"
            />
          </div>
          <span>11 Comments</span>
        </div>
        <RightArrowIcon />
      </a>
    </div>
  );
}
