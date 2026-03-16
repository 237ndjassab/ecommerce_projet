import { useEffect, useState } from "react";
import { socket } from "../../services/socket";

type Message = {
  id?: number;
  content: string;
  senderId: number;
};

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("newMessage", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-3 flex ${
            msg.senderId === 1 ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-xs rounded-lg px-4 py-2 text-sm shadow ${
              msg.senderId === 1
                ? "bg-pink-600 text-white"
                : "bg-white text-gray-800 border border-gray-200"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
