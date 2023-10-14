import TimelineCard from "./TimelineEvents";
import createEvent from "../../public/create-new-event.svg";
import Image from "next/image";
import Link from "next/link";

const MyTimeline: React.FC = () => {
  return (
    <div className="w-full my-8 pb-8 font-inter ">
      {/* Discover and Create */}
      <div className="px-4 md:px-0">
        <div className="relative bg-[url('/Rectangle27.png')] overflow-hidden object-contain rounded-lg bg-cover bg-center min-h-[300px] flex items-center gap-y-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3F3849] via-[rgba(63, 56, 73, 0.83)] to-[rgba(63, 56, 73, 0.00)] z-0"></div>
          <div className="pl-2 md:pl-8 ">
            <div className="max-w-[420px] w-full font-sans relative z-10 ">
              <h1 className="text-white font-bold text-3xl leading-10 mb-4">
                Discover and Create Memorable Events
              </h1>
              <p className="text-[#FFFFFF80] text-base font-medium">
                Craft events that reflect your passions and interests.
              </p>
              <Link href="/timeline/create-events">
                <button className="mt-8 flex gap-2 items-center py-3 px-4 text-black bg-[#FFC6BC] rounded-2xl font-sans font-medium active:bg-[#fadfc8] active:scale-[0.98]">
                  <Image
                    src={createEvent}
                    alt="create-event"
                    className="w-5 h-5"
                  />
                  Create An Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Card Section */}
      <TimelineCard />
    </div>
  );
};

export default MyTimeline;
