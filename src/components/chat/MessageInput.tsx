import { useState } from "react";
import Utils from "../../helpers/Utils";
import useAppSelector from "../../hooks/useAppSelector";
import { socket } from "../../services/socket";
import { setNewMessage } from "../../store/chat/slice";
import useAppDispatch from "../../hooks/useAppDispatch";
import type { User } from "../../types/user";


export default function MessageInput() {
  const dispatch = useAppDispatch();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const user = useAppSelector((state) => state.auth.userInfo);
  const conversationId = Utils.getConversationId();


  const handleSendMsg = () => {
    if (!message.trim() || isSending) return;

    setIsSending(true);

    socket.emit("sendMessage", {
      userId: user?.user.id,
      conversationId,
      message,
    }, (response: { status: "ok" | "error", error: string | null, messageId: number }) => {
      console.log("ACK reçu :", response);

      setIsSending(false);

      if (response.status === "ok") {
        console.log("Message bien enregistré");
        dispatch(setNewMessage({
          id: response.messageId,
          conversationId,
          content: message,
          fileName: "",
          fileType: "",
          fileUrl: "",
          userId: user?.user.id as number,
          seen: false,
          createdAt: Date(),
          sender: user?.user as User,
        }));
        setMessage("");
      } else {
        console.log("Erreur:", response.error);
      }
    });


  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMsg();
    }
  };

  let typingTimeout: number;
  const handleTyping = () => {
    clearTimeout(typingTimeout);

    socket.emit("typing", {
      userId: user?.user.id,
      conversationId: conversationId,
    });

    typingTimeout = setTimeout(() => {
      socket.emit("stopTyping", {
        userId: user?.user.id,
        conversationId,
      });
    }, 1000);
  };

  return (
    <div className="flex items-center border-t border-gray-200 bg-gray-50 p-3">
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          handleTyping();
        }}
        onKeyDown={handleKeyDown}
        placeholder="Tape ton message..."
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none transition"
      />

      <button
        type="button"
        disabled={isSending || !message.trim()}
        onClick={() => handleSendMsg()}
        className="ml-3 rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-pink-700 transition-colors"
      >
        Envoyer
      </button>
    </div>
  );
}