import { useState } from "react";
import Utils from "../../helpers/Utils";
import useAppSelector from "../../hooks/useAppSelector";
import { socket } from "../../services/socket";
import type { Message } from "../../pages/Main/types.chat.ts";

type MessageInputProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export default function MessageInput({ setMessages }: MessageInputProps) {
  const user = useAppSelector((state) => state.auth.userInfo);
  const senderId = user?.user.id;

  const [message, setMessage] = useState("");
  const conversationId = Utils.getConversationId();

  const handleSendMsg = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      content: message,
      senderId,
    };

    // 🔥 affichage immédiat (optimistic UI)
    setMessages((prev) => [...prev, newMessage]);

    socket.emit("sendMessage", {
      senderId,
      conversationId,
      message,
    });

    setMessage("");
  };

  return (
    <div className="flex items-center border-t border-gray-200 bg-gray-50 p-3">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tape ton message..."
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none transition"
      />

      <button
        onClick={()=>handleSendMsg()}
        className="ml-3 rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-pink-700 transition-colors"
      >
        Envoyer
      </button>
    </div>
  );
}