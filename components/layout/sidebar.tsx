import { LogoutIcon } from "assets/icon/sideBarIcons";
import Image from "next/image";
import React from "react";
import NavLinks from "./navLinks";
import Logo from "assets/wetindeysup.png";
import Link from "next/link";
// import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Sidebar() {
  const router = useRouter();

  function handleLogout() {
    Cookies.remove("token");
    router.push("/");
  }

  return (
    <aside className="min-w-[250px] w-[250px] bg-primary h-full hidden lg:flex lg:flex-col justify-between pb-8 rounded-r-3xl">
      <div className="w-full">
        {/* Icon */}
        <div className="flex items-center justify-center gap-2 my-6">
          <Image
            src={Logo}
            alt="logo"
            width={45}
            height={45}
            className="w-auto h-auto"
          />
          <h3 className="text-brand-gray-100 font-bold">WetinDeySup</h3>
        </div>

        <NavLinks />
      </div>

      <button
        className="flex gap-3 items-center text-white/50 font-medium px-12"
        onClick={handleLogout}
      >
        <LogoutIcon />
        <span>Log Out</span>
      </button>
    </aside>
  );
}
