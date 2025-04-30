import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatPage from "./components/ChatPage";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header onToggleTheme={() => setIsDarkMode(prev => !prev)} isDark={isDarkMode} />
          <ChatPage />
        </div>
      </div>
    </div>
  );
};

export default App;
