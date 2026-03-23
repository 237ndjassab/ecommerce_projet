import ConversationList from "./ConversationList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useState } from "react";
import type { Message } from "../../pages/Main/types.chat.ts";
export type connectProps = {
  isconnect: number[]
}

export default function ChatLayout({isconnect}: connectProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar des conversations */}
      <ConversationList isconnect = {isconnect} />

      {/* Zone principale */}
      <div className="flex flex-1 flex-col">
        {/* Liste des messages */}
        <MessageList messages={messages} setMessages={setMessages} />

        {/* Input pour envoyer un message */}
        <MessageInput setMessages={setMessages} />
      </div>
    </div>
  );
}
