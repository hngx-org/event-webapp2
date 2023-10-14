import Image from "next/image";
import Link from "next/link";
import PitchImage from "assets/techiesgroup/pitch.png";
import PeopleImage from "assets/techiesgroup/people.png";

export default function MyPeopleCardDetails() {
  return (
    <div className="min-w-[302px]">
      <div className="px-[16px] py-[24px] rounded-t-[16px] bg-purple-300 relative">
        <div className="flex flex-col gap-[16px]">
          <Image
            className="rounded-[16px]"
            src={PitchImage}
            alt="Football Pitch"
          />
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[12px] font-semibold font-sans text-[16px] text-black">
              <h1 className="font-bold font-montserrat text-[20px] text-primary">
                Football Game
              </h1>
              <h4>20th May, 2023</h4>
              <h4 className="opacity opacity-70">Friday, 16:00-18:00</h4>
              <h4 className="font-normal opacity-80">Teslim Balogun Stadium</h4>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <rect
                  y="0.5"
                  width="32"
                  height="32"
                  rx="8.16761"
                  fill="#3F3849"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.975 11.2614C16.1816 11.0524 16.4617 10.9351 16.7537 10.9351C17.0458 10.9351 17.3259 11.0524 17.5325 11.2614L21.9384 15.7191C22.1448 15.9281 22.2608 16.2115 22.2608 16.507C22.2608 16.8025 22.1448 17.0859 21.9384 17.2949L17.5325 21.7527C17.3247 21.9557 17.0465 22.068 16.7577 22.0655C16.4689 22.0629 16.1926 21.9457 15.9884 21.7391C15.7842 21.5325 15.6684 21.2529 15.6658 20.9607C15.6633 20.6685 15.7744 20.387 15.975 20.1768L18.5007 17.6214H10.1449C9.8528 17.6214 9.57264 17.504 9.36607 17.295C9.1595 17.086 9.04346 16.8026 9.04346 16.507C9.04346 16.2114 9.1595 15.928 9.36607 15.719C9.57264 15.51 9.8528 15.3926 10.1449 15.3926H18.5007L15.975 12.8372C15.7685 12.6282 15.6525 12.3448 15.6525 12.0493C15.6525 11.7537 15.7685 11.4703 15.975 11.2614Z"
                  fill="#FFC6BC"
                />
              </svg>
            </span>
          </div>
          <Link
            href="#"
            className="font-montserrat text-[18px] font-bold underline"
          >
            I will join
          </Link>
        </div>
        <span className="absolute top-[160px] left-[217px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="119"
            viewBox="0 0 85 119"
            fill="none"
          >
            <rect
              x="35.5122"
              y="24.5854"
              width="73.7565"
              height="103.806"
              fill="url(#paint0_linear_14_7228)"
            />
            <rect
              width="73.7565"
              height="103.806"
              fill="url(#paint1_linear_14_7228)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_14_7228"
                x1="72.3905"
                y1="32.0977"
                x2="72.3905"
                y2="188.865"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_14_7228"
                x1="36.8783"
                y1="30.049"
                x2="36.8783"
                y2="161.097"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="px-[24px] py-[16px] bg-primary font-sans text-white rounded-b-[16px] flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-[8px]">
          <Image
            className="w-[66px] h-[24px]"
            src={PeopleImage}
            alt="comments"
          ></Image>
          <p>11 Comments</p>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
