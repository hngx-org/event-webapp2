import React, { useState, useEffect } from "react";
import { MainLayoutProps } from "../../@types";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "./sidebar";
import HarmburgerIcon from "../icons/harmburger";
import Logo from "assets/wetindeysup.png";
import NavLinks from "./navLinks";
import { LogoutIcon } from "@/public/assets/icon/sideBarIcons";
import Image from "next/image";
import http from "@/http/interceptor";
import { useRouter } from "next/navigation";
// import { AuthProvider } from "@/provider/AuthProvider";

type Anchor = "left" | "top" | "bottom" | "right";

function MainLayout({ children, title }: MainLayoutProps) {
  const router = useRouter();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };
  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);
  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }

  return (
    <div>
      <div className="lg:hidden bg-primary p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">{title}</h2>

          <Button
            onClick={toggleDrawer("left", true)}
            //   sx={{ width: "100%", justifyContent: "flex-end" }}
          >
            <HarmburgerIcon />
          </Button>
        </div>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <aside className="w-[320px] bg-primary h-full flex flex-col justify-between pb-8 rounded-r-3xl">
            <div className="w-full">
              {/* Icon */}
              <div className="inline-flex items-center gap-2 mt-6 mx-14 mb-16">
                <Image
                  src={Logo}
                  alt="logo"
                  width={201}
                  height={54}
                  className="w-auto h-auto"
                />
                <h3 className="text-brand-gray-100 text-lg font-bold">
                  WetinDeySup
                </h3>
              </div>

              <NavLinks />
            </div>

            <button
              className="flex gap-3 items-center text-white/50 font-medium px-12"
              onClick={logout}
            >
              <LogoutIcon />
              <span>Log Out</span>
            </button>
          </aside>
        </Drawer>
      </div>
      <div className="w-full h-screen overflow-hidden flex bg-brand-gray-100">
        <Sidebar />
        <main className="flex-grow h-full overflow-y-auto pb-4 lg:px-10 lg:pb-10">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
