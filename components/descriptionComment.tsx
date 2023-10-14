import React from "react";
import Description from "./description";
import { EventProps } from "@/@types";
import Comment from "./comment";
import CommentInput from "./commentInput";
import { UserProfs } from "@/@types";
import { useState } from "react";
import MainLayout from "./layout/mainLayout";

const DescriptionComment = () => {
  const footBallEvent = {
    photoMobile: "/assets/comments/field-ball-mobile.svg",
    title: "Football game",
    date: "May 20, 2023",
    day: "Friday",
    time: "4 - 6 pm",
    location: "Teslim Balogun Stadium",
  };
  interface DescriptionProps {
    footBallEvent: EventProps;
  }
  const user = {
    name: "Johnexx",
    profilePhoto: "/assets/comments/profile-photo.svg",
  };
  interface userProps {
    user: UserProfs;
  }
  return (
    <MainLayout>
      <div className="w-full">
        <div className="flex flex-col lg:max-w-[980px] lg:mx-auto w-full">
          <div className="gap-2 hidden lg:flex m-2 items-center">
            <img
              className="go-back-to-previous-page cursor-pointer"
              src="/assets/comments/ion_arrow-up.svg"
              width={40}
            />
            <h1 className="font-bold">11 commnents</h1>
          </div>

          <div className="flex flex-col w-full lg:flex-row lg:justify-between  ">
            <Description event={footBallEvent} />
            <div>
              <Comment user={user} />
              <CommentInput />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DescriptionComment;
