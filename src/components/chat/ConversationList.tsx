import { useEffect, useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch.ts";
import useAppSelector from "../../hooks/useAppSelector.ts";
import { getAllUser } from "../../store/users/action.ts";
import type { connectProps } from "./ChatLayout.tsx";
import { createConversationAction } from "../../store/chat/conversation/action.ts";
import { socket } from "../../services/socket.ts";
import Utils from "../../helpers/Utils.ts";

export default function ConversationList({ isconnect }: connectProps) {
  const [activeConversation, setActiveConversation] = useState<any>(null);
  console.log("liste des utilisateurs connecté: ", isconnect);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.items);
  // const [addConversation, setAddConversation] = useState<boolean>(false);
  const [usersIds, setUsersIds] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleClick = async (userId: number) => {
  const ids = [userId];

  const res = await dispatch(
    createConversationAction({ userIds: ids })
  );

  const conversationId = (res.payload as any).data.id;

  console.log("conversationId:", conversationId);

  setActiveConversation(conversationId);

  // 🔥 IMPORTANT
  Utils.setConversationId(conversationId);

  socket.emit("joinRoom", { userId: userId });
};

  // const startConversation = async (userId: number) => {};

  return (
    <div className="w-72 border-r border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">
        Conversations
      </h3>

      <div className="space-y-2">
        {users.map((user) => (
          <div
            onClick={() => {
              handleClick(user.id);
            }}
            key={user.id}
            className="flex flex-row justify-between items-center cursor-pointer rounded-lg px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
          >
            <p>{`${user.lastName} ${user.firstName}`}</p>
            {isconnect.includes(user.id) ? (
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 "></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
