import React from "react";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import { BackArrowIcon } from "@/public/assets/icon/peopleIcon";

export default function PeopleHeader() {
  return (
    <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 py-10">
      {/* Title section */}
      <div className="flex items-center gap-2">
        <div className="">
          <BackArrowIcon />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">Techies 💻</h2>
          <p className="text-brand-gray-400 font-medium">12 events</p>
        </div>
      </div>

      {/* Search */}
      <div className="w-80 h-14 relative">
        <input
          placeholder="Find an event"
          className="h-full w-full border border-black/40 rounded-2xl p-2 pl-16 text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
        />
        <div className="absolute left-5 top-5">
          <SearchIcon />
        </div>
      </div>
    </header>
  );
}
