import { useEffect } from "react";
import { socket } from "../../services/socket";
import type { Message } from "../../pages/Main/types.chat.ts";
import useAppSelector from "../../hooks/useAppSelector.ts";

type MessageListProps = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export default function MessageList({
  messages,
  setMessages,
}: MessageListProps) {
  const user = useAppSelector((state) => state.auth.userInfo);
  const ActiveUser = user?.user.id;
  useEffect(() => {
    socket.on("newMessage", (message: Message) => {
      console.log("newMessage arrived : ", message);
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [setMessages]);

  return (
    <div className="flex-1 w-full p-4 overflow-y-auto bg-gray-50">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-3 flex w-full ${
            msg.senderId === ActiveUser ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`max-w-xs rounded-lg px-4 py-2 text-sm shadow ${
              msg.senderId === ActiveUser
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
