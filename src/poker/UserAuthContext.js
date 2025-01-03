import { createContext, useState, useContext, useEffect } from "react";
import { authStateChecker } from "./firebase";

export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthUserContext = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [gameDocID, setGameDocID] = useState(null);

  useEffect(() => {
    authStateChecker((user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        setUserID(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ userID, setUserID, gameDocID, setGameDocID }}
    >
      {children}
    </AuthContext.Provider>
  );
};
