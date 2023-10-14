import EventCard from "@/components/eventCard";
import MainLayout from "@/components/layout/mainLayout";
import MyPeopleCardDetails from "@/components/myPeopleDetailsCard";
import PeopleHeader from "@/components/peopleHeader";

export default function PeopleDetails() {
  return (
    <MainLayout>
      <PeopleHeader />
      <div className="w-full max-w-[714px] mx-auto min-[1230px]:max-w-[998px] md:p-6 flex gap-6 flex-wrap min-[1230px]:flex-nowrap md:bg-brand-gray-300 md:rounded-2xl">
        <EventCard
          bgColor="bg-primary md:bg-brand-purple-300"
          textColor="text-white md:text-black"
          btnColor="max-md:bg-brand-pink-400"
          comments={true}
        />
        <EventCard
          bgColor="bg-brand-purple-300 md:bg-brand-blue-300"
          comments={false}
          img="/Rectangle32.png"
        />
        <EventCard
          bgColor="bg-brand-purple-300 md:bg-brand-pink-500"
          comments={false}
        />
      </div>
    </MainLayout>
  );
}
