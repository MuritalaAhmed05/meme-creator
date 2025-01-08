"use client"

import React, { useState, useEffect } from 'react';
import {
  Smile,
  Flame,
  Layers,
  BookOpen,
  Trash2,
  CheckCircle,
  Zap,
  AlertTriangle,
  CloudLightning,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

const memeTypes = [
  { name: "Affect", icon: Smile },
  { name: "Burn the Paper", icon: Flame },
  { name: "Change My Mind", icon: Layers },
  { name: "Cheers", icon: BookOpen },
  { name: "Cheater Students", icon: Trash2 },
  { name: "Choose Road", icon: CheckCircle },
  { name: "Delete", icon: Trash2 },
  { name: "Disappointed Black Man", icon: AlertTriangle },
  { name: "Meme Generator", icon: Zap },
  { name: "Hitler", icon: CloudLightning },
  { name: "My Heart", icon: Smile },
  { name: "Naughty SpongeBob", icon: Flame },
  { name: "No Yes", icon: Layers },
  { name: "Prisoners", icon: AlertTriangle },
  { name: "Sad Black Man", icon: BookOpen },
  { name: "SpongeBob Shouting", icon: Trash2 },
  { name: "Shit", icon: Trash2 },
  { name: "Trash", icon: Layers },
  { name: "Teaching Teacher", icon: AlertTriangle },
  { name: "Upset Students", icon: BookOpen },
  { name: "Writing on Board", icon: Trash2 },
  { name: "Yeet the Child", icon: Zap },
];

export const Sidebar = ({ setSelectedMeme }:any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setIsCollapsed(isMobileView);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (name:any) => {
    setSelectedItem(name);
    setSelectedMeme(name);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 p-2 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-lg shadow-md border border-gray-200"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      )}

      {/* Backdrop */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`
          fixed md:static min-h-screen bg-white border-r border-gray-200
          transition-all duration-300 ease-in-out z-40
          ${isCollapsed && !isOpen ? '-translate-x-full md:translate-x-0 md:w-16' : 'translate-x-0 w-72'}
        `}
      >
        {/* Desktop Toggle Button */}
        {!isMobile && (
          <button
            onClick={toggleSidebar}
            className="absolute -right-3 top-6 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm"
          >
            <ChevronRight
              className={`h-4 w-4 text-gray-600 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        {/* Header */}
        <div className="p-4 border-b border-gray-200 text-center bg-gradient-to-r from-blue-600 to-indigo-800">
          <h2 className={`
            font-semibold text-gray-800 transition-opacity duration-300
            ${isCollapsed && !isOpen ? 'opacity-0' : 'opacity-100'}
          `}>
            Meme Generator
          </h2>
        </div>

        {/* Navigation Items */}
        <nav className="p-2 space-y-1 bg-gradient-to-r from-blue-600 to-indigo-800 ">
          {memeTypes.map((item) => {
            const isActive = selectedItem === item.name;
            const Icon = item.icon;
            
            return (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`
                  flex items-center w-full px-2 py-2 rounded-lg
                  transition-all duration-200 group
                  ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-white hover:bg-gray-50 hover:text-blue-600'
                  }
                `}
              >
                <Icon className={`
                  h-5 w-5 transition-colors duration-200
                  ${isActive ? 'text-blue-600' : 'text-white group-hover:text-gray-700'}
                `} />
               
                <span className={`
                  ml-3 text-left truncate transition-all duration-300
                  ${isCollapsed && !isOpen ? 'w-0 opacity-0' : 'w-auto opacity-100'}
                  ${isActive ? 'font-medium' : ''}
                `}>
                  {item.name}
                </span>

                {/* Tooltip for collapsed state */}
                {isCollapsed && !isMobile && !isOpen && (
                  <div className="
                    absolute left-full ml-2 px-2 py-1
                    bg-gray-900 text-white text-sm rounded
                    opacity-0 group-hover:opacity-100
                    pointer-events-none transition-opacity duration-200
                    whitespace-nowrap
                  ">
                    {item.name}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;