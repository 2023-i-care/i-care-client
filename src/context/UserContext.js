import React, { useContext, useState } from "react";

export const UserContext = React.createContext({id: "", name: "", pw: ""});
export const SetUserContext = React.createContext(() => {});

export const UserProvider = () => {
  const [user, setUser] = useState({id : "", name : "", pw: ""});

  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>
        {props.Reactchildren}
      </UserContext.Provider>
    </SetUserContext.Provider>
  );
};