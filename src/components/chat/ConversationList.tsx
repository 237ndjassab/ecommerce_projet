export default function ConversationList() {
  const conversations = [
    { id: 1, name: "Jean" },
    { id: 2, name: "Paul" },
  ];

  return (
    <div className="w-72 border-r border-gray-200 bg-gray-50 p-4">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">Conversations</h3>

      <div className="space-y-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="cursor-pointer rounded-lg px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors"
          >
            {conv.name}
          </div>
        ))}
      </div>
    </div>
  );
}
