import Header from "@/components/Header";
import Profile from "@/components/Profile";
import ShowProfile from "@/components/ShowProfile";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (

    <>
    <div>
      <Header/>
      
    </div>
    <div className="flex">
        <Sidebar/>
        <ShowProfile/>
      {/* <Profile /> */}
    </div>

    </>
  );
};

export default page;
