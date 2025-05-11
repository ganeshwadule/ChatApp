import { useState } from "react";

interface UserChatProps {
  pfp?: string;
  username: string;
  activeChat: string;
  setActiveChat: (username: string) => void;
}

const UserChat = ({
  pfp,
  username,
  activeChat,
  setActiveChat,
}: UserChatProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`w-full ${
        activeChat === username ? "bg-indigo-300" : ""
      } text-gray-900 h-[70px] flex items-center p-3  shadow-sm  hover:bg-indigo-300`}
      onClick={() => {
        setIsActive((prev) => !prev);
        setActiveChat(username);
      }}
    >
      <div className="w-10 h-10 flex justify-center items-center rounded-[50%] border-gray-400  overflow-hidden mx-3">
        <img src={pfp} alt="" />
      </div>
      <div className="font-medium  text-grey-900">{username}</div>
    </div>
  );
};

export default UserChat;
