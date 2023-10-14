import React, { useState } from "react";
import MainLayout from "@/components/layout/mainLayout";
import MyCalendar from "@/components/layout/myCalendar";
import Header from "@/components/header";
import { useEventData } from "@/hooks/useEventData";

export default function Calendar() {
  const { events, error, loading } = useEventData();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (data: any) => {
    setSearchQuery(data.target.value);
  };
  return (
    <MainLayout>
      <Header
        title={"Calendar"}
        info={"Stay Connected to Your People’s Events."}
      />
      <MyCalendar />
      <div className="w-full p-[20px] grid md:grid-cols-2 grid-cols-1 gap-[10px]">
        {events?.map((event, index) => (
          <div className="rbc-event" key={index}>
            <div className="p-[10px]">
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="text-[#33313E] text-lg font-bold">
                  {event?.event_name}
                </h3>
                <p className="text-xs"> {event?.event_start.toDateString()} </p>
              </div>
              <p className="text-[#333333] text-base font-medium capitalize">
                {event?.event_description}
              </p>
            </div>
          </div>
        ))}
        {events?.length == 0 ? (
          <div className="rbc-event">
            <div className="p-[10px]">
              <p className="text-[#333333] text-base font-medium capitalize">
                No Event(s)
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </MainLayout>
  );
}
