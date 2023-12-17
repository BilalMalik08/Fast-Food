import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userFirstName, setUserFirstName] = useState("");

  const updateUserFirstName = (firstName) => {
    setUserFirstName(firstName);
  };

  return (
    <UserContext.Provider value={{ userFirstName, updateUserFirstName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
