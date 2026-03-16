import ConversationList from "./ConversationList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar des conversations */}
      <ConversationList />

      {/* Zone principale */}
      <div className="flex flex-1 flex-col">
        {/* Liste des messages */}
        <MessageList />

        {/* Input pour envoyer un message */}
        <MessageInput />
      </div>
    </div>
  );
}
