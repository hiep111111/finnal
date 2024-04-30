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
      const response = await fetch("http://localhost:1235/api/timeSheet/get");
      const responseData = await response.json();

      const formattedData = responseData.map(item => ({
        timesheetCode: item.timesheetCode,
        timesheetName: item.timesheetName,
        createdByUserName: item.createdByUserName,
        state: item.state,
        workLocation: item.workLocation,
        createdAt: formatDate(item.createdAt),
        updatedAt: formatDate(item.updatedAt)
      }));

      setData(formattedData);
      console.log(formattedData);
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
