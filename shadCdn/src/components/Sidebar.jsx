import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MessageSquare, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClicked, setClick] = useState(false);
  const chats = useSelector((state) => state.chats.chats);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  const handleClick = () => setClick((prev) => !prev);

  if (!isCollapsed) {
    return (
      <div className="w-10 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex items-center justify-center">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-[280px] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen transition-all duration-300 overflow-hidden flex flex-col">
      <div className="p-4 flex flex-col h-full">
        <button
          onClick={toggleSidebar}
          className="mb-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full w-fit"
        >
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
        </button>

        <button
          onClick={handleClick}
          className="w-full flex items-center gap-3 px-4 py-3 bg-[#e6e7ea] dark:bg-gray-700 hover:bg-[#d9dadd] dark:hover:bg-gray-600 rounded-full transition-colors"
        >
          <MessageSquare className="w-5 h-5 text-gray-800 dark:text-white" />
          <span className="font-medium text-gray-800 dark:text-white">Chat</span>
        </button>

        <div className="flex-1 overflow-y-auto mt-6">
          {isClicked && (
            <div className="space-y-2 mb-6">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer truncate text-sm"
                >
                  {chat.text.slice(0, 30)}...
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2 mt-auto">
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
          <SidebarItem icon={<LogOut className="w-5 h-5" />} label="Logout" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, onClick }) => (
  <div
    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer text-gray-700 dark:text-gray-200"
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;