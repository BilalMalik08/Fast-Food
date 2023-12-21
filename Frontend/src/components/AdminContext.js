import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminFirstName, setAdminFirstName] = useState("");

  const updateAdminFirstName = (firstName) => {
    setAdminFirstName(firstName);
  };

  return (
    <AdminContext.Provider value={{ adminFirstName, updateAdminFirstName }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
