interface UserChatProps {
  pfp?: string;
  username: string;
  setActiveChat:(username:string)=>void
}

const UserChat = ({ pfp, username ,setActiveChat }: UserChatProps) => {
  return (
    <div className="w-full  text-gray-900 h-[70px] flex items-center p-3  shadow-sm" onClick={()=>setActiveChat(username)}>
      <div className="w-10 h-10 flex justify-center items-center rounded-[50%] border-gray-400  overflow-hidden mx-3">
        <img src={pfp} alt="" />
      </div>
      <div className="font-medium  text-grey-900">{username}</div>
    </div>
  );
};

export default UserChat;
