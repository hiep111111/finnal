import React, { createContext, useContext, useState, useEffect } from "react";
import { format } from "date-fns";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy");
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:1235/api/overtime/get");
      const responseData = await response.json();
       const formattedData = responseData.map(item => ({
        userName: item.userName,
        overtimeName: item.overtimeName,
        email: item.email,
        department: item.department,
        createdByUserName: item.createdByUserName,
        createdAt: formatDate(item.createdAt)
       }));
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};