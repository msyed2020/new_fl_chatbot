"use client";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F7F7F8] dark:bg-[#1A1A1A]">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] p-4 hidden md:block">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-lg">
            AI
          </div>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">AI Assistant</h1>
        </div>
        
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">New Chat</span>
        </button>

        <div className="space-y-2">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4">Recent Chats</h2>
          <div className="space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Previous Conversation 1
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Previous Conversation 2
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] flex items-center px-6">
          <div className="md:hidden flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
              AI
            </div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">AI Assistant</h1>
          </div>
        </header>

        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Message */}
          <div className="flex items-start space-x-4 animate-fade-in">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-sm font-medium shadow-md">
              AI
            </div>
            <div className="flex-1">
              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[85%] border border-gray-100 dark:border-gray-800">
                <p className="text-gray-800 dark:text-gray-200">
                  Hello! I'm your AI assistant. How can I help you today?
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block ml-2">Just now</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] p-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Message AI Assistant..."
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-6 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-sm transition-all duration-200"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="bg-gradient-to-br from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white rounded-xl px-6 py-3 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Press Enter to send, Shift + Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
