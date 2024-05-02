import React, { createContext, useContext, useState, useEffect } from "react";
import { format } from "date-fns";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [storedata, setstoredata] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy");
  };

  const filterDataByUser = (responseData, userKey) => {
    return responseData.filter(item => {
      const userPrefix = userKey + " -";
      return item.timesheetCode.startsWith(userPrefix);
    });
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const userKey = localStorage.getItem("user");
      const response = await fetch("http://localhost:1235/api/timeSheet/get");
      const responseData = await response.json();

      if (userKey) {
        const filteredData = filterDataByUser(responseData, userKey);
        const formattedData = filteredData.map(item => ({
          timesheetCode: item.timesheetCode,
          timesheetName: item.timesheetName,
          createdByUserName: item.createdByUserName,
          state: item.state,
          workLocation: item.workLocation,
          createdAt: formatDate(item.createdAt),
          updatedAt: formatDate(item.updatedAt)
        }));
        const formaData = filteredData.map(item => ({
          _id: item._id,
          timesheetCode: item.timesheetCode,
          timesheetName: item.timesheetName,
          createdByUserName: item.createdByUserName,
          state: item.state,
          workLocation: item.workLocation,
          createdAt: formatDate(item.createdAt),
          updatedAt: formatDate(item.updatedAt)
        }));
        setstoredata(formaData)
        setData(formattedData);
      } else {
        console.error("User key not found in localStorage");
      }
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
