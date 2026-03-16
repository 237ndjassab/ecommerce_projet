import { useState } from "react";

export default function MessageInput() {
  // const user = useAppSelector((state) => state.auth.userInfo);
  // const id = user?.user.id;
  const [message, setMessage] = useState("");


  return (
    <div className="flex items-center border-t border-gray-200 bg-gray-50 p-3">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tape ton message..."
        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-pink-500 focus:ring focus:ring-pink-200 outline-none transition"
      />
      <button
        // onClick={sendMessage}
        className="ml-3 rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-pink-700 transition-colors"
      >
        Envoyer
      </button>
    </div>
  );
}
