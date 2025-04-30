import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "@/Store/chatSlice";
import { MessageSquare, SendHorizontal } from 'lucide-react';

const ChatPage = () => {
  const dispatch = useDispatch();
  const [chat, setChat] = useState("");
  const selector = useSelector((state) => state.chats.chats);

  const handleClick = (e) => {
    e.preventDefault();

    if (!chat.trim()) return;

    dispatch(addChat({ text: chat, role: "user" }));
    setChat("");

    setTimeout(() => {
      dispatch(addChat({ text: "Let me check that for you...", role: "bot" }));
    }, 800);

    setTimeout(() => {
      dispatch(
        addChat({
          text: "Here is what I found regarding your query.",
          role: "bot",
        })
      );
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-48px)]">
      <div className="flex-1 overflow-y-auto px-4 py-6 bg-[#f8f9fa] dark:bg-gray-900">
        {selector.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
            <MessageSquare className="w-12 h-12 mb-4" />
            <p className="text-xl font-medium">How can I help you today?</p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {selector.map((item) => (
              <div
                key={item.id}
                className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  item.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 dark:bg-gray-700 dark:text-white shadow-sm"
                }`}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
        <form onSubmit={handleClick} className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              placeholder="Message Gemini..."
              className="w-full px-4 py-3 pr-12 rounded-2xl border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <SendHorizontal className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;