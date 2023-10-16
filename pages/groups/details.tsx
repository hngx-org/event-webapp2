import { GroupDetails, GroupEvents, SingleGroup } from "@/@types";
import EventCard from "@/components/eventCard";
import MainLayout from "@/components/layout/mainLayout";
import PeopleHeader from "@/components/peopleHeader";
import http from "@/http/interceptor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function PeopleDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [events, setEvents] = useState<GroupEvents[]>();
  const [details, setDetails] = useState<GroupDetails>();

  const bgColors = [
    "bg-primary md:bg-brand-purple-300",
    "bg-brand-purple-300 md:bg-brand-blue-300",
    "bg-brand-purple-300 md:bg-brand-pink-500",
  ];
  const otherColors = [
    "bg-brand-blue-300",
    "bg-brand-pink-400",
    "bg-brand-pink-500",
    "bg-brand-purple-300",
  ];
  const fetchDetails = async () => {
    const response = await http.get(`/groups/info/${id}`);
    if (response.status === 200) {
      setDetails(response.data.data);
    } else {
      toast.success("Cannot fetch Data", {
        position: "top-right",
      });
    }
  };

  const fetchEvents = async () => {
    const response = await http.get(`/groups/events/${id}`);
    if (response.status === 200) {
      setEvents(response.data.data);
    } else {
      toast.success("Cannot fetch Data", {
        position: "top-right",
      });
      setEvents([]);
    }
  };
  const eventLength = events?.length;

  useEffect(() => {
    fetchDetails();
    fetchEvents();
  }, []);

  return (
    <MainLayout>
      <PeopleHeader eventLength={eventLength} data={details!} />
      {events ? (
        <div className="w-full px-2 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:bg-brand-gray-300 md:rounded-2xl">
          {events?.map((event: GroupEvents, index: number) => {
            const randomNumber = Math.floor(Math.random() * otherColors.length);
            const randomColor = otherColors[randomNumber];
            return (
              <EventCard
                key={event.id}
                bgColor={index < 3 ? bgColors[index] : randomColor}
                textColor={index === 0 ? "text-white md:text-black" : ""}
                btnColor={index === 0 ? "max-md:bg-brand-pink-400" : ""}
                comments={index === 0 ? true : false}
                event={event}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-lg">
          No events for this group currently, create one to connect with friends
        </p>
      )}
    </MainLayout>
  );
}
