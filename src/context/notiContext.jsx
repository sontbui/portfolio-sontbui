// src/context/NotiContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const NotiContext = createContext();

// Create a provider component
export const NotiProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Function to add notifications
  const addNotification = (notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  return (
    <NotiContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotiContext.Provider>
  );
};

// Custom hook for using notifications
export const useNoti = () => {
  return useContext(NotiContext);
};
