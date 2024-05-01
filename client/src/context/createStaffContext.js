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
      const response = await fetch("http://localhost:1234/api/get");
      const responseData = await response.json();

      // Lấy danh sách id đã lưu từ localStorage
      const storedIds = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : [];
      
      let matchedObject = null;

      const formattedData = responseData.map(item => {
        if (storedIds.includes(item._id)) {
          matchedObject = item;
        }
        return {
          company: item.company,
          _id: item._id,
          userName: item.userName,
          email: item.email,
          passWord: item.passWord,
          createdAt: formatDate(item.createdAt),
          updatedAt: formatDate(item.updatedAt)
        };
      });

      // Nếu có đối tượng trùng khớp, lưu vào formattedData
      if (matchedObject) {
        formattedData.push(matchedObject);
      }

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
