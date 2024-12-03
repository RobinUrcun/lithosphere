"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isUserLog: Boolean,
  setIsUserLog: () => {},
});

export default function AuthProvider({ children, isUserConnected }) {
  const [isUserLog, setIsUserLog] = useState(isUserConnected);

  return (
    <AuthContext.Provider
      value={{ isUserLog: isUserLog, setIsUserLog: setIsUserLog }}
    >
      {children}
    </AuthContext.Provider>
  );
}
