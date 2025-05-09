import { useEffect, useRef, useState } from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default App;
