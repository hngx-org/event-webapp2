import React from "react";
import Link from "next/link";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import { BackArrowIcon } from "@/public/assets/icon/peopleIcon";
import SearchBar from "./searchBar";
import { GroupDetails } from "@/@types";
import Image from "next/image";
import TechiesImage from "assets/mypeople/people1.png";

export default function PeopleHeader({
  data,
  eventLength,
}: {
  data: GroupDetails;
  eventLength: number | undefined;
}) {
  return (
    <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 py-10">
      {/* Title section */}
      <div className="flex items-center gap-2">
        <Link href="/groups">
          <BackArrowIcon />
        </Link>
        <div className="flex gap-3">
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#D9D9D9]">
            <Image
              src={data?.image || TechiesImage}
              width={200}
              height={200}
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">{data?.group_name}</h2>
            <p className="text-brand-gray-400 font-medium">
              {eventLength ? eventLength : 0} events
            </p>
          </div>
        </div>
      </div>

      <SearchBar />
    </header>
  );
}
