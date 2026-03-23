import { useEffect } from "react";
import useAppDispatch from "../../hooks/useAppDispatch.ts";
import useAppSelector from "../../hooks/useAppSelector.ts";
import { getAllUser } from "../../store/users/action.ts";
import { getAllConversationAction, getMessageAction } from "../../store/chat/action.ts";
import Utils from "../../helpers/Utils.ts";

export default function ConversationList() {
  const dispatch = useAppDispatch();
  const conversations = useAppSelector((state) => state.chat.conversations);

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllConversationAction());
  }, [dispatch]);

  const handleClick = async (conversationId: number) => {
    Utils.setConversationId(conversationId);
    dispatch(getMessageAction({ conversationId }));
  };

  return (
    <div className="w-72 border-r border-gray-200 bg-gray-50 p-4">
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
            <p>{item.isGroup ? item.name : `${item.members[0].user.firstName} ${item.members[0].user.lastName}`}</p>
            {item.isGroup ? null : item.members[0].user.isOnline ? (
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 "></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
