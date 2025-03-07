import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000"; // Adjust for production

const useSocket = () => {
  const [socket, setSocket] = useState(io(SOCKET_URL));
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit("user-message", message);
    }
  };

  return { messages, sendMessage };
};

export default useSocket;
