import { useEffect } from "react";
import useAppSelector from "../../hooks/useAppSelector.ts";
import { socket } from "../../services/socket.ts";
import ChatLayout from "../../components/chat/ChatLayout.tsx";
import useAppDispatch from "../../hooks/useAppDispatch.ts";
import { checkUserOnline } from "../../store/users/slice.ts";

const Chat = () => {
  const user = useAppSelector((state) => state.auth.userInfo);


  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("socket", socket);
    console.log("Socket connecté:", socket.id);

    // Si déjà connecté → émettre directement
    if (socket.connected) {
      console.log("user?.user.id", user?.user.id);
      socket.emit("userConnected", { userId: user?.user.id });
      socket.emit("joinRoom", { userId: user?.user.id });
    }

    // Si connexion arrive plus tard
    const handleConnect = () => {
      console.log("Socket connecté:", socket.id);
      socket.emit("userConnected", { userId: user?.user.id });
    };

    socket.on("connect", handleConnect);

    //informer le serveur que l'utilisateur est connecté
    socket.emit("userConnected", { userId: user?.user.id });

    //recevoir les utilisateurs en ligne
    socket.on("onlineUsers", (userIds: number[]) => {
      dispatch(checkUserOnline(userIds))
    });

    socket.on("error", (error) => {
      console.log("error", error);
    })

    return () => {
      socket.emit("userDisconnected", { userId: user?.user.id });
      socket.off("connect", handleConnect);
      socket.off("onlineUsers");
      socket.off("error");
    };
  }, [user, dispatch]);

  return <ChatLayout />;
};

export default Chat;
