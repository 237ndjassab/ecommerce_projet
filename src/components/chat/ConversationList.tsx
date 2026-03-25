import { useEffect, useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch.ts";
import useAppSelector from "../../hooks/useAppSelector.ts";
import { getAllUser } from "../../store/users/action.ts";
import {
  createConversationAction,
  getAllConversationAction,
  getMessageAction,
} from "../../store/chat/action.ts";
import Utils from "../../helpers/Utils.ts";
import { LuCircleX, LuMessageSquarePlus } from "react-icons/lu";
import { socket } from "../../services/socket.ts";

export default function ConversationList() {
  const dispatch = useAppDispatch();
  const conversations = useAppSelector((state) => state.chat.conversations);
  const users = useAppSelector((state) => state.user.items);
  const authInfo = useAppSelector((state) => state.auth.userInfo);
  const userId = authInfo?.user.id;
  const [newConversation, setNewConversation] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllConversationAction());
  }, [dispatch]);

  const handleClick = async (conversationId: number) => {
    Utils.setConversationId(conversationId);
    dispatch(getMessageAction({ conversationId }));
  };
  const handleCreateConversation = async (ids: number[]) => {
    dispatch(createConversationAction({ userIds: ids }));
    socket.emit("joinRoom", { userId });
  };

  return (
    <div className="w-72 relative border-r border-gray-200 bg-gray-50 p-4 flex flex-col gap-10">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">
        Conversations
      </h3>

      <div className="space-y-2">
        {conversations.map((item) => (
          <div
            onClick={() => {
              handleClick(item.id);
            }}
            key={item.id}
            className="flex flex-row justify-between items-center cursor-pointer rounded-lg px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
          >
            <p>
              {item.isGroup
                ? item.name
                : `${item.members[1].user.firstName} ${item.members[1].user.lastName}`}
            </p>
            {item.isGroup ? null : item.members[1].user.isOnline ? (
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 "></div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row justify-center">
        <div
          className="w-10 h-10 rounded-full bg-black flex flex-row justify-center items-center cursor-pointer"
          onClick={() => setNewConversation((prev) => !prev)}
        >
          <LuMessageSquarePlus color="white" size="20px" />
        </div>
      </div>
      <div
        className={` absolute top-2 left-0  ${newConversation ? "translate-x-0" : "-translate-x-80"} transition duration-300 ease-in-out rounded-r-md w-[90%] h-[90%] flex flex-col bg-pink-500 shadow `}
      >
        <div className="w-full flex flex-row justify-end px-2.5 py-5">
          <div
            onClick={() => setNewConversation((prev) => !prev)}
            className="w-5 h-5 rounded-full bg-black flex flex-row justify-center items-center cursor-pointer"
          >
            <LuCircleX color="white" size="20px" />
          </div>
        </div>
        {users.map((item) => (
          <div
            onClick={() => {
              handleCreateConversation([item.id]);
              setNewConversation((prev) => !prev);
            }}
            key={item.id}
            className="flex flex-row justify-between items-center cursor-pointer rounded-md px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
          >
            <p>
              {item.firstName} {item.lastName}
            </p>
            {item.isOnline ? (
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 "></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
