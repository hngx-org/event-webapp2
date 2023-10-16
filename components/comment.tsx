import React from "react";
import { useState } from "react";
import { UserProfs } from "@/@types";
import Image from "next/image";

const Comment = ({ user }: { user: UserProfs }) => {
  return (
    <div className=" mx-auto max-h-[400px]  overflow-auto w-[500px] m-2">
      <div className="comments__fiel text-primary">
        <div className=" gap-2 ">
          {/* comment */}
          <div className="comment flex m-2 gap-2 text-center items-center">
            <Image
              className="user__profile-photo"
              src={user.profilePhoto}
              width={100}
              height={100}
              alt="up"
            />
            <div className="comment__contsinerv border-2 border-primary p-1 rounded-lg text-left max-w-[350px]">
              <span className="user-name  text-xs">{user.name}</span>
              <p className="max-w-full overflow-wrap-normal">
                I will be there no matter what
              </p>
            </div>
          </div>

          <div className="comment flex m-2 gap-2 text-center items-center">
            <Image
              className="user__profile-photo"
              src={user.profilePhoto}
              width={100}
              height={100}
              alt="up"
            />
            <div className="comment__contsinerv border-2 border-primary p-1 rounded-lg text-left max-w-[350px]">
              <span className="user-name  text-xs">{user.name}</span>
              <p className="max-w-full overflow-wrap-normal">
                I will be there no matter what, i am coming the football, i will
                support my club no matter what even if they fail i am still
                going to be happy with the , because they worth it not many will
                understand what i am saying, only few will relate to this issue
              </p>
              <Image
                src="/assets/comments/player.png"
                width={100}
                height={100}
                alt="up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
