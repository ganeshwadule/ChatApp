import { useEffect, useRef, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState<WebSocket>();
  const [messages, setMessages] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    socket?.send(inputRef.current?.value ?? "");
    inputRef.current.value = ""
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      setMessages((prevMessages) => [...prevMessages, e.data]);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-900 text-white font-medium flex flex-col justify-center items-center">
      <h1 className="text-2xl">Chats</h1>
      <div className="mb-5">
        {messages.map((message,index) => (
          <div key={index} className="px-4 py-2 border-gray-300 border bg-gray-800 w-84 my-3 rounded-md">
            {message}
          </div>
        ))}
      </div>
      <div className="flex justify-around gap-2">
        <input
          className="w-64 border-gray-100  border text-gray-50 rounded-md bg-gray-700 outline-0 px-3 py-2"
          type="text"
          ref={inputRef}
          placeholder="Enter a message"
        />
        <button
          className=" rounded-md bg-gray-500 px-4 py-2 text-white font-bold"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
