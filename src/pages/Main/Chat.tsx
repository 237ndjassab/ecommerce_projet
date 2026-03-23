import { useEffect, useState } from "react";

import useAppSelector from "../../hooks/useAppSelector.ts";
import { socket } from "../../services/socket.ts";
import ChatLayout from "../../components/chat/ChatLayout.tsx";

const Chat = () => {
  const [onlineUsers, setOnlineUser] = useState<number[]>([]);
  
  const user = useAppSelector((state) => state.auth.userInfo);
  const id = user?.user.id;

  useEffect(() => {
    //connexion au serveur temps reel
    socket.on("connect", () => {
      console.log("Socket connecté:", socket.id);

      //informer le serveur que l'utilisateur est connecté
      socket.emit("userConnected", id);

      //recevoir les utilisateurs en ligne
      socket.on("onlineUsers", (users: number[]) => {
        console.log("users online : ", users);
        setOnlineUser(users);
      });
    });
    return () => {
      socket.off("connect");
      socket.off("onlineUsers");
    }; 
  }, []);

  return <ChatLayout isconnect = {onlineUsers} />;
};

export default Chat;
