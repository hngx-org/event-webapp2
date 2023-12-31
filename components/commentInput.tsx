import React from "react";
import Image from "next/image";

const CommentInput = () => {
  return (
    <div className="w-full flex border-t p-2 ">
      <div className="flex justify-center items-center mx-auto mt-2 w-[400px] gap-2 ">
        <input type="file" className="hidden" id="upload" />
        <label htmlFor="upload">
          <Image
            src="/assets/comments/upload-icon.svg"
            className=" cursor-pointer"
            width={100}
            height={100}
            alt="up"
          />
        </label>
        <input
          type="text"
          className="border-2 w-[90%] text-sm border-primary pl-2 pt-1 pb-1 pr-2 outline-none rounded-[20px]"
        />
        <Image
          src="/assets/comments/mic.svg"
          className=" cursor-pointer"
          width={100}
          height={100}
          alt="up"
        />
      </div>
    </div>
  );
};

export default CommentInput;
