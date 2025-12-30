/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type IUser } from "../types/global.types";
import { profileApi } from "../api/auth.api";

interface IContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isLoading: boolean;
  logout: () => void;
}

const initial_value: IContext = {
  user: null,
  setUser: () => {},
  isLoading: true,
  logout: () => {},
};

const AuthContext = createContext<IContext>(initial_value);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Try to read a cached user from localStorage synchronously so the UI can render quickly
    try {
      const saved = localStorage.getItem("user");
      if (saved) {
        setUser(JSON.parse(saved) as IUser);
      } else {
        setUser(null);
      }
    } catch (e) {
      console.warn("Failed to parse cached user", e);
      setUser(null);
    }

    setIsLoading(false);

    async function validate() {
      try {
        const data = await profileApi();
        if (data && typeof data === "object" && "data" in data) {
          setUser((data as { data: IUser }).data);
          localStorage.setItem(
            "user",
            JSON.stringify((data as { data: IUser }).data)
          );
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.log("session validation failed", error);
        setUser(null);
        localStorage.removeItem("user");
      }
    }

    validate();
  }, []);

  const logout = (cb = () => {}) => {
    localStorage.removeItem("user");
    setUser(null);
    cb();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  if (!AuthContext) {
    console.log("useAuth hook must used inside auth provide");
  }

  return useContext(AuthContext);
};

export default AuthProvider;
