import Navbar from "./Navbar";
import UserChat from "./UserChat";
import pfp from "../../public/pfp.jpeg";
import ChatMessages from "./ChatMessages";
import { useState } from "react";

const Dashboard = () => {
  const [activeChat,setActiveChat] = useState('');
  console.log(activeChat)
  return (
    <div className="w-full h-screen flex flex-col ">
      {/* Navbar with fixed height */}
      <div className="h-16">
        <Navbar />
      </div>

      <div className="flex-1 flex  overflow-hidden">
        <div className="w-[40%] p-4  py-7 flex flex-col gap-y-3  overflow-y-auto">
          <UserChat username="Ganesh" pfp={pfp} setActiveChat = {setActiveChat}/>
          <UserChat username="Vivek" pfp={pfp}  setActiveChat = {setActiveChat}/>
          <UserChat username="Manoj" pfp={pfp}  setActiveChat = {setActiveChat}/>
          <UserChat username="Rahul" pfp={pfp}  setActiveChat = {setActiveChat}/>
          <UserChat username="Rushi" pfp={pfp}  setActiveChat = {setActiveChat}/>
         
        </div>

        <ChatMessages currentUser={activeChat} />
      </div>
    </div>
  );
};

export default Dashboard;
