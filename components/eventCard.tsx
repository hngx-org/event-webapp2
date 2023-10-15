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
  event,
}: EventCardProps) {
  const date = new Date(event.event_start);
  const formattedDate = convertDateFormat(event.event_start);
  const weekDay = date.toLocaleDateString("en-US", { weekday: "long" });
  const startTime = event.event_start.slice(0, -3);
  const endTime = event.event_end.slice(0, -3);

  function convertDateFormat(dateString: string): string {
    // Create a new Date object from the dateString
    let date = new Date(dateString);

    // Extract the day, month and year from the date object
    let day: string | number = date.getDate();
    let month: string | number = date.getMonth() + 1; // Month is zero-based, so add one
    let year = date.getFullYear();

    // Add leading zeros if needed
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    // Return the formatted date string using template literals
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="w-full max-w-[380px] md:max-w-[320px] min-[1230px]:max-w-[300px] mx-auto md:mx-0 font-sans overflow-hidden min-[1024px]:max-w-[293px] min-[1112px]:max-w-[320px]">
      <div
        className={`${bgColor} ${textColor} px-4 py-4 md:pl-4 md:pt-6 md:pb-3 rounded-t-2xl text-base border border-b-0 border-black md:border-none`}
      >
        <div className="flex items-center md:items-start md:flex-col gap-2 md:gap-3">
          <div className="w-[70px] h-[70px] md:w-full md:h-[140px] relative z-10 bg-neutral-400 rounded-full md:rounded-2xl">
            <Image
              src={event.image || PitchImage}
              alt="Football Pitch"
              width={270}
              height={160}
              className="object-cover w-full h-full rounded-full md:rounded-2xl"
            />
          </div>
          <div className="relative flex justify-between max-md:flex-1 w-full">
            <div className="md:space-y-1">
              <div className="font-bold font-sans md:font-monserrat text-lg md:text-xl tracking-[0.2px] md:text-primary">
                {event.event_name}
              </div>
              <div className="font-medium">{formattedDate}</div>
              <div className="font-medium text-xs md:text-base md:opacity-70">
                {`${weekDay}, ${startTime}-${endTime}`}
              </div>
              <div className="font-medium md:font-normal md:opacity-80 text-[15px] md:text-base">
                {event.location || "Unknown"}
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