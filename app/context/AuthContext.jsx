"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isUserLog: Boolean,
  setIsUserLog: () => {},
});

export default function AuthProvider({ children, isUserConnected, tokenRole }) {
  const [isUserLog, setIsUserLog] = useState(isUserConnected);
  const [userRole, setUserRole] = useState(tokenRole);

  return (
    <AuthContext.Provider
      value={{
        isUserLog: isUserLog,
        setIsUserLog: setIsUserLog,
        userRole: userRole,
        setUserRole: setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
