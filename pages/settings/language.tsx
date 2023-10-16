import Header from "@/components/header";
import SettingsLayout from "@/components/layout/SettingsLayout";
import MainLayout from "@/components/layout/mainLayout";
import React from "react";

export default function Language() {
  return (
    <MainLayout>
      <div className="w-full">
        <Header
          title="Settings"
          info="Configure the settings to suit your preferences"
        />

        <SettingsLayout>
          <div className="p-4 mb-4 rounded-lg w-fit bg-[#FFC6BC] flex items-center gap-2.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_20_15514)">
                <path
                  d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                  stroke="#33313E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                  stroke="#33313E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_15514">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="font-bold text-lg">Language and Region Settings</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className=" font-semibold text-lg">Language</h3>
                <p className="max-w-[75%] text-black/70">
                  Choose the language that you want to display your event page
                  in.
                </p>
              </div>

              <div className="relative group inline-block">
                <button className="flex justify-center bg-[#FFEEEB] border border-gray-300 w-28 py-3 rounded-xl font-semibold">
                  English
                  <svg
                    className="w-6 h-6 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 14l-5-5 1.5-1.5L10 11l3.5-3.5L15 9z" />
                  </svg>
                </button>
                <ul className="hidden absolute z-10 space-y-2 bg-[#FFEEEB] border border-gray-300 px-0 rounded-lg w-40 text-gray-800 group-hover:block right-0">
                  <li className="block px-4 py-2 hover:bg-red-100">English</li>
                  <li className="block px-4 py-2 hover:bg-red-100">Français</li>
                  <li className="block px-4 py-2 hover:bg-red-100">Español</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className=" font-semibold text-lg">Region</h3>
                  <p className="max-w-[75%] text-black/70">
                    Choose the region that you are located in. This will help us
                    to provide you with more relevant event recommendations and
                    search results.
                  </p>
                </div>

                <div className="relative group inline-block">
                  <button className="flex justify-center bg-[#D2F5FE] border border-gray-300 w-28 py-3 rounded-xl font-semibold">
                    Lagos
                    <svg
                      className="w-6 h-6 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 14l-5-5 1.5-1.5L10 11l3.5-3.5L15 9z" />
                    </svg>
                  </button>
                  <ul className="hidden absolute z-10 space-y-2 bg-[#D2F5FE] border border-gray-300 px-0 rounded-lg w-40 text-gray-800 group-hover:block right-0">
                    <li className="block px-4 py-2 hover:bg-blue-200/50">
                      Lagos
                    </li>
                    <li className="block px-4 py-2 hover:bg-blue-200/50">
                      Abuja
                    </li>
                    <li className="block px-4 py-2 hover:bg-blue-200/50">
                      Rivers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SettingsLayout>
      </div>
    </MainLayout>
  );
}
