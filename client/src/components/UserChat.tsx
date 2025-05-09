interface UserChatProps {
  pfp?: string;
  username: string;
}

const UserChat = ({ pfp, username }: UserChatProps) => {
  return (
    <div className="w-full  text-gray-900 h-[70px] flex items-center p-3 rounded-md">
      <div className="w-10 h-10 flex justify-center items-center rounded-[50%] border-gray-400  overflow-hidden mx-3">
        <img src={pfp} alt="" />
      </div>
      <div className="font-medium text-xl text-[#0ebb85]">{username}</div>
    </div>
  );
};

export default UserChat;
