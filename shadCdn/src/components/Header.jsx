import React from "react";
import { Settings, User, Sun, Moon } from "lucide-react";

const Header = ({ onToggleTheme, isDark }) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-2 px-4 flex items-center gap-4 h-[48px]">
      <div className="flex-1" />

      <button
        onClick={onToggleTheme}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        title="Toggle Theme"
      >
        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </button>

      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
        <Settings className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>

      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
        <User className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
    </header>
  );
};

export default Header;