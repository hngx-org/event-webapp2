import React from "react";
import MainLayout from "@/components/layout/mainLayout";
import Header from "@/components/header";
import MyTimeline from "@/components/layout/myTimeline";

export default function Index() {
  return (
    <MainLayout>
      <Header
        title="Timeline"
        info="Explore the events happening around you."
      />
      <MyTimeline />
    </MainLayout>
  );
}
