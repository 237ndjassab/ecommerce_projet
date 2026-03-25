import { useEffect, useRef, useState } from "react";
import { socket } from "../../services/socket";
import type { Message } from "../../pages/Main/types.chat.ts";
import useAppSelector from "../../hooks/useAppSelector.ts";
import useAppDispatch from "../../hooks/useAppDispatch.ts";
import { setNewMessage } from "../../store/chat/slice.ts";



export default function MessageList() {
  const [typingUser, setTypingUser] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.chat.messages);
  const user = useAppSelector((state) => state.auth.userInfo);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    socket.on("newMessage", (message: Message) => {
      console.log("newMessage arrived : ", message);
      dispatch(setNewMessage(message));
    });

    socket.on("typing", (data: { userId: number }) => {
      console.log("asda", data);
      
      if (data.userId !== user?.user.id) {
        console.log("data.userId", data.userId);
        
        setTypingUser(data.userId);

        // clear ancien timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setTypingUser(null);
        }, 2000);
      }
    });

    socket.on("stopTyping", () => {
      setTypingUser(null);
    });

    return () => {
      socket.off("newMessage");
      socket.off("typing");
      socket.off("stopTyping");

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dispatch, user]);

  return (
    <div className="flex-1 w-full p-4 overflow-y-auto bg-gray-50">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-3 flex w-full ${msg.senderId === user?.user.id ? "justify-end" : "justify-start"
            }`}
        >
          <div
            className={`max-w-xs rounded-lg px-4 py-2 text-sm shadow ${msg.senderId === user?.user.id
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-800 border border-gray-200"
              }`}
          >
            {msg.content}
          </div>
        </div>
      ))}

      {typingUser && (
        <div className="flex space-x-1 mt-8">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
        </div>

      )}
    </div>)

}
