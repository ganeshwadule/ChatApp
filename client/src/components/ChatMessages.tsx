import pfp from "../../public/pfp.jpeg";
import SendICon from "../icons/SendICon";
import Message from "./Message";

const messages: string[] = [
  "hii",
  "hello",
  "hii",
  "hello",
  "hii",
  "hello",
  "hii",
  "hello",
  "hii",
  "hello",
];

const ChatMessages = () => {
  return (
    <div className="flex h-full w-[60%] bg-[#d1fae6] flex-col rounded">
      <div className="w-full text-gray-900 h-[70px] flex items-center p-3 bg-[#0ebb85]">
        <div className="w-10 h-10 flex justify-center items-center rounded-[50%] border-gray-400 border overflow-hidden mx-3">
          <img src={pfp} alt="" />
        </div>
        <div className="font-medium text-xl text-white">Sarthak</div>
      </div>
      <div className="messageArea flex-1  p-2 overflow-y-auto flex flex-col ">
        <div className="flex flex-col items-end">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>
      <div className="bg-[#33d49c] text-white px-2 w-full flex justify-between items-center gap-2">
        <textarea
          className="w-[80%] resize-none rounded p-2 py-3 text-gray-800 font-medium border-0 outline-0 hide-scrollbar"
          placeholder="Type a message"
          rows={1}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        />
        <button className="w-[20%] flex justify-end px-7 rounded font-semibold">
          <SendICon />
          {/* send */}
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
