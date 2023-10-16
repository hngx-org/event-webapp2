import Header from "@/components/header"
import Image from 'next/image'
import {
    CancelIcon,
    PeopleIcon,
    RedCancelIcon,
    UploadIcon,
  } from "@/public/assets/icon/peopleIcon";
  import { useState } from "react";
  interface NotificationBarProps {
    onClose: () => void;
  }
  import Avatar from "assets/images/avatar.png";
const SettingNotifications: React.FC<NotificationBarProps> = ({onClose}) => {
    return(
    <>
    <div className="border border-black w-6/12  rounded-2xl pb-3">
        <div className="flex justify-between pt-3 pl-3 items-center">
        <h1>Notifications</h1>
        <button onClick={onClose}>
            <CancelIcon />
        </button>
        </div>
        <hr className="h-px p-0 w-auto my-8 bg-black border-0 dark:bg-black-700" />
        <div className="flex pt-1 pl-3">
        <div className=" overflow-hidden mr-5">
          <Image
            src={Avatar}
            alt="logo"
            width={200}
            height={200}
            className="w-full rounded-full object-cover"
          />
        </div>
        <div className="block">
            <p>Uduak has added you to "<span className="font-bold">Techies</span>"</p>
            <p>2hrs ago</p>
        </div>
        </div>
        <hr className="h-px p-0 w-auto my-8 bg-black border-0 dark:bg-black-700"/>
        <div className="flex pt-1 pl-3">
        <div className=" overflow-hidden mr-5">
          <Image
            src={Avatar}
            alt="logo"
            width={200}
            height={200}
            className="w-full rounded-full object-cover"
          />
        </div>
        <div className="block">
            <p>The shinobi has added "HNG FINALIST EVENT" "<span className="font-bold">Techies</span>"</p>
            <p>5hrs ago</p>
        </div>
        </div>
        <hr className="h-px p-0 w-auto my-8 bg-black border-0 dark:bg-black-700"/>
        <div className="flex pt-1 pl-3">
        <div className=" overflow-hidden mr-5">
          <Image
            src={Avatar}
            alt="logo"
            width={200}
            height={200}
            className="w-full rounded-full object-cover"
          />
        </div>
        <div className="block">
            <p>The shinobi has added "HNG FINALIST EVENT" "<span className="font-bold">Techies</span>"</p>
            <p>5hrs ago</p>
        </div>
        </div>
        <hr className="h-px p-0 w-auto my-8 bg-black border-0 dark:bg-black-700"/>
        <div className="flex pt-1 pl-3">
        <h6 className="text-decoration-underline">Mark all as read</h6>
        </div>
        </div>
    </>

    )
}
export default SettingNotifications