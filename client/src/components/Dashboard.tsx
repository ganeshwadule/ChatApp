import Navbar from "./Navbar";
import UserChat from "./UserChat";
import pfp from "../../public/pfp.jpeg";
import ChatMessages from "./ChatMessages";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#ecfdf5]">
      {/* Navbar with fixed height */}
      <div className="h-16">
        <Navbar />
      </div>

      <div className="flex-1 flex  overflow-hidden">
        <div className="w-[40%] p-4  py-7 flex flex-col gap-y-3 border-r border-gray-500 overflow-y-auto">
          <UserChat username="Ganesh" pfp={pfp} />
          <UserChat username="Ganesh" pfp={pfp} />
          <UserChat username="Ganesh" pfp={pfp} />
          <UserChat username="Ganesh" pfp={pfp} />
          <UserChat username="Ganesh" pfp={pfp} />
         
        </div>

        <ChatMessages />
      </div>
    </div>
  );
};

export default Dashboard;
