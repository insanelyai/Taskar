"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/users/fetchUser");
      if (res.status === 200) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
      console.log("CALLED");
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function UseUserContext() {
  return useContext(UserContext);
}
