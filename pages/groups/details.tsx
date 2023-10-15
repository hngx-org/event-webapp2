import { SingleGroup } from "@/@types";
import EventCard from "@/components/eventCard";
import MainLayout from "@/components/layout/mainLayout";
import PeopleHeader from "@/components/peopleHeader";
import http from "@/http/interceptor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PeopleDetails() {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log('Group Id', id)
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("GroupId" , id)

  const [data, setData] = useState<any>([]);
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
    const fetchData = () => fetch(`https://wetindeysup-api.onrender.com/api/groups/events/27c3c6fc-1538-41e0-92b8-eed07d4847c5`)
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(error => console.log(error))

  useEffect(() => {
    fetchData();
    console.log("effecct ran");
  }, []);
console.log(data[0])
  return (
    <MainLayout >
        <PeopleHeader
        // image={data[0].image}
        numberOfEvents={data.length}
        //groupName={data[0].location}
      /> 
       {data.length ?? 0 > 0 ? (
        <div className="w-full max-w-[714px] mx-auto min-[1230px]:max-w-[998px] px-2 md:p-6 flex gap-6 flex-wrap min-[1230px]:flex-nowrap md:bg-brand-gray-300 md:rounded-2xl">
          {data.map((event:any, index:number) => {
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
        <p className="text-center text-lg">No events for this group</p>
      )}  
    </MainLayout>
  );
  
  } 
