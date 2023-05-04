import React, { useContext, useState } from "react";

export const UserContext = React.createContext("");

export const useUser = () => {
    const [user, setUser] = useContext(UserContext);
    return { user, setUser };
};

export const UserProvider = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.Reactchildren}
    </UserContext.Provider>
  );
};