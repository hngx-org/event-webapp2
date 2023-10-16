import MainLayout from "@/components/layout/mainLayout";
import Header from "@/components/header";
import MyPeopleCard from "@/components/myPeopleCard";
import http from "@/http/interceptor";
import { useEffect, useState } from "react";
import CreateGroup from "@/components/createGroup";
import { Group } from "@/@types";
import TechiesImage from "assets/mypeople/people1.png";
import SkeletonLoader from "@/components/groupSkeletonLoader";

export default function People() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // const apiUrl = "https://wetindeysup-api.onrender.com/api/groups";

  function getRandomColor() {
    const colors = ["#D2F5FE", "#EEE0FF", "#FFE0C4", "#FFC6BC"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function getRandomEvents() {
    const events = [4, 10, 6, 8, 5, 3];
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  }

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    try {
      const res = await http.get("/groups");
      setGroups(res.data);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <MainLayout title="Groups">
      <Header title="My Groups" info="Stay Connected to Your Group's Events." />
      <div className="p-4 lg:p-0">
        <CreateGroup />
        {isLoading ? (
          <div className="bg-secondary grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 rounded-2xl">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        ) : groups?.length > 0 ? (
          <div className="bg-secondary grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 rounded-2xl">
            {groups.map((group) => (
              <MyPeopleCard
                key={group.id}
                imgSrc={group.image || TechiesImage}
                // imgSrc={group.group_name}
                bgColor={getRandomColor()}
                events={group.numEvents}
                name={group.group_name}
                id={group.id}
              />
            ))}
          </div>
        ) : (
          <p className="text-xl p-4 text-center">
            There are no groups currently, create one to connect with friends.
          </p>
        )}
      </div>
    </MainLayout>
  );
}
