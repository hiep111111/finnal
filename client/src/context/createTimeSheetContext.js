// Trong file previewTimeSheetContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
const API_URL = "http://localhost:1235/api/timeSheet/post";

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendDataToAPI = async (dataToSend) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });
      if (!response.ok) {
        throw new Error('Failed to send data to API');
      }
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
    setIsLoading(false);
  };

  return (
    <DataContext.Provider value={{ isLoading, sendDataToAPI }}>
      {children}
    </DataContext.Provider>
  );
};
