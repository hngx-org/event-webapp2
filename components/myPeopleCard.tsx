import Image from "next/image";
import TechiesImage from "assets/mypeople/people1.png";
// import YBNLImage from "assets/mypeople/people2.png";
import Link from "next/link";
import { MyPeopleProps } from "@/@types";
import { GroupRectangleSVG } from "./layout/TimelineEvents";


const MyPeopleCard = ({ bgColor, imgSrc, name, events, id }: MyPeopleProps) => {
  return (
    <Link
      href={`/groups/details?id=${id}`} passHref
      className={`py-3 px-2 sm:py-6 sm:px-4 flex flex-col rounded-2xl bg-[${bgColor}] overflow-hidden`}
    >
      {/* Conditionally render the image if the value from api call is null or not */}
      {imgSrc ? (
          <Image src={imgSrc} width={273} height={173} className="w-full order-last md:order-first" alt="" />
        ) : (
          <Image src={TechiesImage} width={273} height={173} className="w-full order-last md:order-first" alt="" />
        )}
      <div className="relative mt-4 flex justify-between gap-3">
        <span className="text-black font-sans font-medium text-base">
          <h2 className="font-montserrat text-lg sm:text-xl font-bold text-[#3F3849]">
            {name}
          </h2>
          <h6 className="mt-3 text-sm sm:text-base">{events} events</h6>
        </span>
        <div className="absolute top-[-82px] sm:top-[-32px] right-[-16px]">
          <GroupRectangleSVG />
        </div>
      </div>
    </Link>
  );
};

export default MyPeopleCard;
