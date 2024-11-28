import Header from "@/components/Header";
import MoktobBisoyTally from "@/components/MoktobBisoyTally";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="fixed">
        <Sidebar />
        {/* <SidebarAdmin/> */}
      </div>

      <h1 className="text-xl font-semibold text-red-500 text-center">
        Dashboard Page
      </h1>
      <MoktobBisoyTally />
    </div>
  );
};

export default page;
