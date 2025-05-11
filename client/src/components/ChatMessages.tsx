import { useRef, useState } from "react";
import pfp from "../../public/pfp.jpeg";
import SendICon from "../icons/SendICon";
import Message from "./Message";

const ChatMessages = ({currentUser}:{currentUser:string}) => {
  const [messages, setMessages] = useState<string[]>([
    "hii",
    "hello",
    "hii",
    "hello",
    "hii",
    "hello",
    "hii",
    "hello",
    "hii",
    "hello How are you bro",
  ]);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = ()=>{
    console.log(inputRef.current?.value)
    setMessages(prev => [...prev,inputRef.current?.value ?? ""])
  }
  return (
    <div className="flex h-full w-[60%]  border-[#d1fae6] border flex-col shadow-md">
      {/* <div className="w-full text-gray-900 h-[70px] flex items-center p-3 ">
        <div className="w-10 h-10 flex justify-center items-center rounded-[50%] border-gray-400 border overflow-hidden mx-3">
          <img src={pfp} alt="" />
        </div>
        <div className="font-medium text-xl text-white">Sarthak</div>
      </div> */}
      <div className="messageArea flex-1  p-2 overflow-y-auto flex flex-col ">
        <div className="flex flex-col items-end">
          {messages.map((message, index) => (
            <Message key={index} message={message} />

          ))}
        </div>
      </div>
      <div className="bg-indigo-100 text-white px-2 w-full flex justify-between items-center gap-2">
        <textarea
          className="w-[80%] resize-none rounded p-2 py-3 text-gray-950 font-medium border-0 outline-0 hide-scrollbar"
          placeholder="Type a message"
          rows={1}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
          ref ={inputRef}
        />
        <button className="w-[20%] flex justify-end px-7 rounded font-semibold" onClick={sendMessage}>
          <SendICon />
          {/* send */}
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
