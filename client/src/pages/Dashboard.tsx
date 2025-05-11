import Navbar from "../components/Navbar";
import UserChat from "../components/UserChat";
import pfp from "../../public/pfp.jpeg";
import ChatMessages from "../components/ChatMessages";
import { useState } from "react";

const Dashboard = () => {
  const [activeChat, setActiveChat] = useState("");

  console.log(activeChat);
  return (
    <div className="w-full h-screen flex flex-col ">
      {/* Navbar with fixed height */}
      <div className="h-16">
        <Navbar />
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-[40%] p-4  py-7 flex flex-col gap-y-3  overflow-y-auto">
          <div className="flex">
            <div>
              <div className="text-[16px] px-2 font-medium  bg-indigo-100 rounded  text-gray-750">Chats</div>
            </div>
            <div className="text-[16px] px-2 font-medium  bg-indigo-100 rounded mx-3 text-gray-750">Groups</div>
          </div>

          <UserChat
            username="Ganesh"
            pfp={pfp}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
          <UserChat
            username="Vivek"
            pfp={pfp}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
          <UserChat
            username="Manoj"
            pfp={pfp}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
          <UserChat
            username="Rahul"
            pfp={pfp}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
          <UserChat
            username="Rushi"
            pfp={pfp}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
          />
        </div>

        <ChatMessages currentUser={activeChat} />
      </div>
    </div>
  );
};

export default Dashboard;
