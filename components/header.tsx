import React, { useContext } from "react";
import Avatar from "assets/images/avatar.png";
import { SearchIcon } from "@/public/assets/icon/searchIcon";
import Image from "next/image";
import SearchBar from "@/components/searchBar";
import { AuthContextType, HeaderProps } from "@/@types";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "@/provider/AuthProvider";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Header({ title, info }: HeaderProps) {
  const Router = useRouter();
  const { token, user } = useAuth();
  return (
    <header className="w-full flex justify-between h-max sticky top-0 bg-brand-gray-100 z-20 p-4 lg:py-10 lg:px-0 gap-4">
      {/* Title section */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-brand-gray-400 font-medium">{info}</p>
      </div>

      {/* Search */}

      <SearchBar />
      {/* <div className="w-full md:w-60 xl:w-[352px] h-[40px] md:h-[52px] relative">
        <input
          placeholder="Find an event"
          className="h-full w-full border border-black/40 rounded-2xl p-2 pl-16 text-primary placeholder:text-brand-gray-600 focus:outline-none bg-transparent"
        />
        <div className="absolute left-5 top-2 md:top-5">
          <SearchIcon />
        </div>
      </div>  */}

      {/* <SearchBar /> */}

      {/* Profile */}

      <div className="flex gap-2 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={user?.avatar as string}
            alt="logo"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="hidden md:inline-flex font-semibold text-lg capitalize">
          {user?.username}
        </p>
      </div>
    </header>
  );
}
