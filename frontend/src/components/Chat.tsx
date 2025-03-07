import { useState } from "react";
import useSocket from "../hooks/useSocket";

const Chat = () => {
  const { messages, sendMessage } = useSocket();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Chat App</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
