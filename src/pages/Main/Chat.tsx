import { useEffect } from "react";

import useAppSelector from "../../hooks/useAppSelector.ts";
import { socket } from "../../services/socket.ts";
import ChatLayout from "../../components/chat/ChatLayout.tsx";

// type User = {
//   id: number;
// };

const Chat = () => {
  const user = useAppSelector((state) => state.auth.userInfo);
  const id = user?.user.id;
  // simulation utilisateur connecté
  //   const user: User = {
  //     id: 1,
  //   };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connecté:", socket.id);

      socket.emit("userConnected", id);
    });
  }, []);

  return <ChatLayout />;
};

export default Chat;
